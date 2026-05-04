function handleProjectId(langSelect) {
  const projectListEls = document.querySelectorAll('.project a');
  projectListEls.forEach((a) => {
    if (a.getAttribute('href') === '') {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.getAttribute('id');
        window.location.href = `detail.html?id=${id}`;
        sessionStorage.setItem('lang', langSelect);
      });
    }
  });
}

export async function fetchProjectList(langSelect) {
  const url = `./data/${langSelect}/project/list/projectList.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    const projectList = () => {
      return data.map((list) => {
        const skillList = list ? list.skill.map(skill => `<li>${skill}</li>`).join('') : '';

        let icon = `
          <span class="icon">
            <svg class="icon__svg" viewBox="0 0 19 19">
              <line x1="0.5" y1="17.51" x2="17.51" y2="0.5"/>
              <polyline points="2.71 0.5 17.51 0.5 17.51 15.29"/>
            </svg>
          </span>
        `;
        if (list.icon === 'BROWSER') {
          icon = `
            <span class="icon browser-box">
              <svg class="icon__svg" viewBox="0 0 19 19">
                <circle cx="3" cy="3" r="0.5" fill="white" />
                <circle cx="6" cy="3" r="0.5" fill="white" />
                <circle cx="9" cy="3" r="0.5" fill="white" />
                <rect x="0.5" y="0.5" width="17.01" height="17.01"/>
                <line x1="0.5" y1="5" x2="17.51" y2="5"/>
              </svg>
            </span>
          `;
        }

        const link = list.link || '';
        const target = list.link ? '_blank' : '_self';

        return `
          <li class="project">
            <a id="${list.id}" href="${link}" target="${target}">
              <h3>${list.title}
                ${icon}
              </h3>
              <p class="project__role">${list.role}</p>
              <p class="project__description">
                ${list.description}
              </p>
              <ul class="project-lists__skills">
                ${skillList}
              </ul>
            </a>
          </li>
        `;
      }).join('');
    };

    document.querySelector('.section--project .project-lists').innerHTML = projectList();
    handleProjectId(langSelect);
  } catch (error) {
    console.error('Error fetching project list data:', error);
    document.getElementById('project').innerHTML = '<li>프로젝트 리스트를 가져오는데 실패했어요 :(</li>';
  }
}
