import { fetchWeatherData } from './weather.js';
import { drawTime } from './time.js';
import { fetchProjectList } from './projectList.js';
import { f_header_img } from './headerImg.js';
import { f_indicator } from './indicator.js';

const userLanguage = (navigator.languages !== undefined) ? navigator.languages[0] : navigator.language;
let lang = (userLanguage !== 'en') ? 'ko' : 'en';
sessionStorage.setItem('lang', lang);
let rootPath;

function fetchHTML(rootPath) {
  const html = document.getElementsByTagName('html')[0];
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        html.innerHTML = this.responseText;
        drawTime();
        fetchProjectList(lang);
        f_header_img();
        fetchWeatherData();
        f_indicator();
        f_addEventHandler();
      }
      if (this.status === 404) {
        html.innerHTML = 'Page not found.';
      }
    }
  };
  xhttp.open('GET', rootPath, true);
  xhttp.send();
}

function f_addEventHandler() {
  const emailBtnEl = document.getElementById('email');
  emailBtnEl.addEventListener('click', () => {
    navigator.clipboard.writeText(emailBtnEl.value)
      .then(() => alert('You copied my email successfully👍'))
      .catch(() => alert('Copying failed😫'));
  });

  const langBtnEl = document.getElementById('langBtn');
  langBtnEl.classList.add(lang);
  langBtnEl.addEventListener('click', () => {
    lang = (lang === 'ko') ? 'en' : 'ko';
    langBtnEl.classList.remove('ko', 'en');
    langBtnEl.classList.add(lang);
    rootPath = `./data/${lang}/index.html`;
    fetchHTML(rootPath);
  });
}

function setHTML() {
  document.addEventListener('DOMContentLoaded', () => {
    rootPath = `./data/${lang}/index.html`;
    fetchHTML(rootPath);
  });
}

if (location.pathname === '/' || location.pathname === '/mimispace1/') {
  setHTML();
}
