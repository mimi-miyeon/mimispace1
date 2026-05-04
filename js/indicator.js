function deleteActive(indicatorBtnEls) {
  indicatorBtnEls.forEach((btn) => btn.classList.remove('active'));
}

function f_moveScroll(indicatorBtnEls, projectScroll) {
  indicatorBtnEls.forEach((btn) => {
    const name = btn.getAttribute('name');
    btn.onclick = () => {
      if (name === 'project') {
        window.scrollTo({ top: projectScroll, behavior: 'smooth' });
      }
    };
  });
}

function f_scrollDetector(indicatorBtnEls, projectScroll) {
  window.onscroll = () => {
    deleteActive(indicatorBtnEls);
    if (projectScroll <= window.scrollY) {
      document.getElementsByName('project')[0].classList.add('active');
    }
  };
}

export function f_indicator() {
  const indicator = document.querySelector('#indicator');
  const indicatorBtnEls = indicator.querySelectorAll('#indicator li');
  const indicatorH = indicator.offsetHeight;
  const project = document.querySelector('#project');
  const projectY = Math.round(project.getBoundingClientRect().top);
  const projectScroll = projectY - indicatorH;

  f_moveScroll(indicatorBtnEls, projectScroll);
  f_scrollDetector(indicatorBtnEls, projectScroll);
}
