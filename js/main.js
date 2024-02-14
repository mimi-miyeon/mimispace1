/**
 * 
 * 날씨 및 아이콘 가져오기
 * 
 */
// https://www.weatherapi.com/ api
const tempEl = document.getElementById('temp');
const weatherIconEl = document.getElementById('weatherIcon');

async function fetchWeatherData() {
  const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=e73c70f92c5e4fe5a6865325232112&q=36.51468,127.2604&aqi=no';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // 기온 가져오기
    const temperatureCelsius = data.current.temp_c;
    tempEl.innerText = temperatureCelsius + "'C";

    // 날씨 아이콘 가져오기
    const weatherImg = data.current.condition;
    weatherIconEl.setAttribute('src', weatherImg.icon);
    weatherIconEl.setAttribute('alt', weatherImg.text);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
fetchWeatherData();


/**
 * 
 * 현재 시간 가져오기 (대한민국)
 * 
 */
function updateClock() {
  const localtimeEl = document.getElementById('localtime'); 
  const locale = 'kr-KR'; 
  const options = { hour: 'numeric', minute: 'numeric', timeZone: 'Asia/Seoul' };
  
  const now = new Date();
  const formatter = new Intl.DateTimeFormat(locale, options);
  const formattedTime = formatter.format(now);

  localtimeEl.innerText = formattedTime;
}

// prevMinutes 이전 시간
let prevMinutes = new Date().getMinutes();
// 매 초 새로운 시간을 가져옴
function dynamicInterval() {
  const currentMinutes = new Date().getMinutes();
  // 이전 시간과 비교해서 업데이트
  if (currentMinutes !== prevMinutes) {
    updateClock();
    prevMinutes = currentMinutes;
  }
}
setInterval(dynamicInterval, 1000);
updateClock();



/**
 * 
 * 이메일 복사 코드
 * 
 */
function copyButtonValue() {
  var emailBtnEl = document.getElementById('email');
  var emailValue = emailBtnEl.value;

  navigator.clipboard.writeText(emailValue)
  .then(()=>{
    alert("이메일 복사가 완료되었습니다.");
  }).catch((error)=>{
    alert("miyeon9143@naver.com로 연락해주세요.")
  })
};

/**
 * 
 * 프로젝트 리스트 로딩
 * 
 */
async function fetchProjectList () {
  const url = 'data/project/list/projectList.json';
  try 
  {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    const projectList = () => {
      return data.map((list)=> {
        const skillList = list ? list.skill.map(skill => `<li>${skill}</li>`).join('') : "";
        
        // 프로젝트 링크 여부에 따른 아이콘
        let icon = `
          <span class="icon">
            <svg class="icon__svg" viewBox="0 0 19 19">
              <line x1="0.5" y1="17.51" x2="17.51" y2="0.5"/>
              <polyline points="2.71 0.5 17.51 0.5 17.51 15.29"/>
            </svg>
          </span>
        `;
        if(list.icon === "BROWSER") {
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

        let link = list.link;
        let target = "_blank";
        if(!list.link) {
          link = "";
          target = "_self"
        };

        // 프로젝트 <li>
        return `
          <li class="project">
            <a id="${list.id}" href="${list.link}" target="${target}">
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
      }).join('')
    };

    document.querySelector('.section--project .project-lists').innerHTML = projectList();
    
    handleProjectId();
  }
  catch (error)
  {
    console.error('Error fetching project list data:', error);
    document.getElementById('project').innerHTML = "<li>프로젝트 리스트를 가져오는데 실패했어요 :(</li>";
  }
};
fetchProjectList();


const handleProjectId = () => {
  const projectListEls = document.querySelectorAll('.project a');
  projectListEls.forEach((a)=>{
    if(a.getAttribute('href') === "") {
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = a.getAttribute('id');
        window.location.href = `detail.html?id=${id}`;
      });
    }
  })
};

/**
 * 
 * 헤더 이미지 랜덤
 * 
 */

const headerImg = [
  {
    src: "cranky.png",
    alt: "짜증난"
  },
  {
    src: "sleep.png",
    alt: "잠자는"
  },
  {
    src: "snowball.gif",
    alt: "스노우볼 캐릭터"
  },
  {
    src: "walk.gif",
    alt: "산책가자"
  },
  {
    src: "space.png",
    alt: "우주인 우주견"
  },
  {
    src: "showoff.png",
    alt: "뽐내는 스노우볼"
  },
  {
    src: "yay.png",
    alt: "야호야호"
  },
  {
    src: "tired.png",
    alt: "피곤"
  },
  {
    src: "starving.png",
    alt: "배고픔"
  },
  {
    src: "chill.png",
    alt: "뒹굴뒹굴"
  },
  {
    src: "mountain.png",
    alt: "설산"
  }
];

function getHeaderImgIndex () {
  return Math.floor(Math.random() * headerImg.length);
};
const selectedImg = headerImg[getHeaderImgIndex()];
const imgSrc = selectedImg.src;
const imgAlt = selectedImg.alt;
const headerImgEl = document.getElementById("headerImg");
headerImgEl.setAttribute("src",`images/${imgSrc}`);
headerImgEl.setAttribute("alt",imgAlt);

/**
 * 
 * 인디케이터 표시
 * 
 */
const indicator = document.querySelector('#indicator');
const indicatorBtnEls = indicator.querySelectorAll('#indicator li');
const indicatorH = indicator.offsetHeight;
const project = document.querySelector('#project');
const projectY = Math.round(project.getBoundingClientRect().top);
const projectScroll = projectY - indicatorH;


// 버튼 활성화 삭제
function deleteActive () {
  indicatorBtnEls.forEach((btn)=> {
    btn.classList.remove('active');
  });
};

indicatorBtnEls.forEach((btn)=>{
  const name = btn.getAttribute('name');

  btn.onclick=()=>{
    btn.classList.add('active');
    deleteActive();
    
    // 이동
    if(name === 'about') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else if (name === 'project') {
      window.scrollTo({top: projectScroll, behavior: 'smooth'});
    }
  };
});

// 스크롤 활성화
window.onscroll = () => {
  if(projectScroll <= window.scrollY) {
    deleteActive();
    document.getElementsByName('project')[0].classList.add('active');
  } else {
    deleteActive();
    document.getElementsByName('about')[0].classList.add('active');
  }
};