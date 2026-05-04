import { applyTranslations } from './i18n.js';
import { fetchWeatherData } from './weather.js';
import { drawTime } from './time.js';
import { fetchProjectList } from './projectList.js';
import { f_header_img } from './headerImg.js';
import { f_indicator } from './indicator.js';

const userLanguage = (navigator.languages !== undefined) ? navigator.languages[0] : navigator.language;
let lang = (userLanguage !== 'en') ? 'ko' : 'en';
sessionStorage.setItem('lang', lang);

const INDEX_PATH = './data/index.html';

async function fetchHTML() {
  const html = document.getElementsByTagName('html')[0];
  try {
    const response = await fetch(INDEX_PATH);
    if (!response.ok) { html.innerHTML = 'Page not found.'; return; }
    html.innerHTML = await response.text();
    await applyTranslations(lang);
    drawTime();
    fetchProjectList(lang);
    f_header_img();
    fetchWeatherData();
    f_indicator();
    f_addEventHandler();
  } catch (error) {
    console.error('Error fetching page:', error);
  }
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
    sessionStorage.setItem('lang', lang);
    fetchHTML();
  });
}

function setHTML() {
  document.addEventListener('DOMContentLoaded', () => {
    fetchHTML();
  });
}

if (location.pathname === '/' || location.pathname === '/mimispace1/') {
  setHTML();
}
