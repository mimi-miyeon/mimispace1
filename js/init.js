/* HEAD TAG SETS UP */
const headContentEn = [
  {type: "meta", attributes: {charset:"UTF-8"} },
  {type: "meta", attributes: {"http-equiv":"X-UA-Compatible", content:"IE=edge"} },
  {type: "meta", attributes: {name:"viewport", content:"width=device-width, initial-scale=1.0"} },
  {type: "meta", attributes: {property:"og:type", content:"website"} },
  {type: "meta", attributes: {property:"og:url", content:"https://mimi-miyeon.github.io/mimispace1/"} },
  {type: "meta", attributes: {property:"og:title", content:"Mimi's portfolio site - UI/UX Designer, Graphic Designer, Front-end developer(potential)"} },
  {type: "meta", attributes: {property:"og:image", content:"images/metaOg.jpg"} },
  {type: "meta", attributes: {property:"description", content:"Portfolio site where you can explore my journey from graphic designer to publisher and front-end developer."} },
  {type: "meta", attributes: {property:"og:site_name", content:"Mimi's portfolio site"} },
  {type: "meta", attributes: {property:"og:locale", content:"ko"} },
  {type: "meta", attributes: {property:"og:image:width", content:"1200"} },
  {type: "meta", attributes: {property:"og:image:height", content:"630"} },
  {type: "meta", attributes: {name:"twitter:card", content:"summary"} },
  {type: "meta", attributes: {name:"twitter:title", content:"Mimi's portfolio site - UI/UX Designer, Graphic Designer, Front-end developer(potential)"} },
  {type: "meta", attributes: {name:"twitter:description", content:"Portfolio site where you can explore my journey from graphic designer to publisher and front-end developer."} },
  {type: "meta", attributes: {name:"twitter:image", content:"images/metaOg.jpg"} },
  {type: "meta", attributes: {name:"keywords", content:"HTML, CSS, Javascript, React, jQuery, Adobe XD, Adobe Illustrator, Adobe Photoshop, Zeplin, UI/UX Designer, Front-end developer, Portfolio, Designer, Mimi's portfolio site"} },
  {type: "meta", attributes: {name:"author", content:"Miyeon Mimi Yang"} },

  {type: "title", content: "Mimi's portfolio site"},

  {type: "link", attributes: {rel:"shortcut icon", href:"/images/favicon.gif", type:"image/gif"} },
  {type: "link", attributes: {href:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap", rel:"stylesheet"} },
  {type: "link", attributes: {href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;300;400;500;600;700&display=swap", rel:"stylesheet"} },
  {type: "link", attributes: {rel:"stylesheet", href:"css/styles.css"} },
  {type: "link", attributes: {rel:"stylesheet", href:"css/index.css"} },

  {type: "script", attributes: {defer: "", src:"js/index.js"} }
];


const headContentKo = [
];

/* GET INDEX FILE */
/* DEPENDS ON THE USER'S LANGUAGE SETTING, */
/* FETCH DIFFRENT INDEX FROM DIFFREMNT PATH*/
// GET USER'S LANGUAGE SETTING
const userLanguage = (navigator.languages !== undefined) ? navigator.languages[0] : navigator.language;
export const lang = (userLanguage !== "ko") ? "en" : "ko";

function fetchHTML(rootPath) 
{
  let html, file, xhttp;
  html = document.getElementsByTagName("html")[0];
  file = `${rootPath}`;
  if (file) 
  {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4) 
      {
        if (this.status == 200) 
        {
          html.innerHTML = this.responseText;

          // HANDLE TIME
          drawTime();
      
          // FETCH PROJECT LIST 
          fetchProjectList(lang);
      
          // HEADER IMG DRAWING
          f_header_img();
    
          // FETCH WEATHER INFO
          fetchWeatherData();

          // BUTTONS TO SCROLL TO MENU
          f_indicator();
          //
          loadHeadContent(lang);
        }
        if (this.status == 404) {html.innerHTML = "Page not found.";}
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
  }
};



function loadHeadContent(lang) 
{
  let headContent = (lang==="ko") ? headContentKo : headContentEn;
  // Clear current head content
  document.head.innerHTML = '';

  // Iterate over the head content array
  headContent.forEach(item => {
      let element = document.createElement(item.type);
      if (item.attributes) 
      {
        for (let key in item.attributes) 
        {
          if (item.attributes[key] === '') 
          {
            element.setAttribute(key, '');
          } 
          else {
            element.setAttribute(key, item.attributes[key]);
          }
        }
      }
      
      // Append the element to the head
      document.head.appendChild(element);
  });
} 

/* WEATHER API */
// https://www.weatherapi.com/ api
async function fetchWeatherData()
{
  let tempEl, weatherIconEl, temperatureCelsius, weatherImg;
  tempEl = document.getElementById('temp');
  weatherIconEl = document.getElementById('weatherIcon');
  const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=e73c70f92c5e4fe5a6865325232112&q=36.51468,127.2604&aqi=no';

  try 
  {
    const response = await fetch(apiUrl);

    if (!response.ok) 
    {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // GET TEMPERTURE
    temperatureCelsius = data.current.temp_c;
    tempEl.innerText = temperatureCelsius + "'C";

    // GET WEATHER ICON
    weatherImg = data.current.condition;
    weatherIconEl.setAttribute('src', weatherImg.icon);
    weatherIconEl.setAttribute('alt', weatherImg.text);
  } 
  catch (error) 
  {
    tempEl.innerText = "🥵";
    console.error('Error fetching weather data:', error);
  }
};




/* SETTING MY TIMEZONE */
/* GET CURRENT TIME */
/* CHECK THE TIME CHANGES EVERY SECOND */
/* WRITE THE TIME */
// GET CURRENT TIME
function getTimezone() 
{
  // MY LOCATION INFO
  // NEED TO BE CHANGED WHEN LOCATION CHANGED
  const locale = 'kr-KR'; 
  
  let options, now, formattedTime, formatter;
  options = { hour: 'numeric', minute: 'numeric', timeZone: 'Asia/Seoul' };
  now = new Date();
  formatter = new Intl.DateTimeFormat(locale, options);
  formattedTime = formatter.format(now);

  return formattedTime;
};

// GET NEW MINUTE EVERY SECOND
let initialMinutes = new Date().getMinutes();
function dynamicGetTime() 
{
  const renewedMinutes = new Date().getMinutes();
  if(initialMinutes !== renewedMinutes)
  {
    initialMinutes = renewedMinutes;
    let localtimeEl = document.getElementById('localtime');
    localtimeEl.innerHTML = getTimezone();
  }
};
// DRAW 
function drawTime() {
  let localtimeEl = document.getElementById('localtime');
  localtimeEl.innerHTML = getTimezone();
  setInterval(dynamicGetTime, 1000);
};




/* COPY EMAIL */
function copyButtonValue()
{
  console.log("EMAIL")
  var emailBtnEl = document.getElementById('email');
  var emailValue = emailBtnEl.value;

  navigator.clipboard.writeText(emailValue)
  .then(()=>{
    alert("You copied my email successfully👍");
  }).catch((error)=>{
    alert("Copying failed😫");
  })
};




/* FETCH PROJECT LIST */
async function fetchProjectList (langSelect) 
{
  const url = `data/${langSelect}/project/list/projectList.json`;
  try 
  {
    const response = await fetch(url);
    if (!response.ok) 
    {
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
    
    handleProjectId(langSelect);
  }
  catch (error)
  {
    console.error('Error fetching project list data:', error);
    document.getElementById('project').innerHTML = "<li>프로젝트 리스트를 가져오는데 실패했어요 :(</li>";
  }
};

/* PROJECT DETAIL PAGE LINK */
const handleProjectId = (langSelect) => 
{
  const projectListEls = document.querySelectorAll('.project a');
  projectListEls.forEach((a)=>{
    if(a.getAttribute('href') === "") 
    {
      a.addEventListener('click', (e)=>
      {
        e.preventDefault();
        const id = a.getAttribute('id');
        window.location.href = `detail.html?id=${id}`;
      });
    };
  });
};



/* HEADER RANDOM IMG */
// LIST OF THE IMG
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
    src: "chill.png",
    alt: "뒹굴뒹굴"
  },
  {
    src: "mountain.png",
    alt: "설산"
  }
];
// RETURN RANDOM NUMBER
function getHeaderImgIndex () 
{
  return Math.floor(Math.random() * headerImg.length);
};
// SET HEADER IMG
function f_header_img()
{
  const selectedImg = headerImg[getHeaderImgIndex()];
  const imgSrc = selectedImg.src;
  const imgAlt = selectedImg.alt;
  const headerImgEl = document.getElementById("headerImg");
  headerImgEl.setAttribute("src",`images/${imgSrc}`);
  headerImgEl.setAttribute("alt",imgAlt);
};



/* PAGE INDICATOR */
function f_indicator()
{
  const indicator = document.querySelector('#indicator');
  const indicatorBtnEls = indicator.querySelectorAll('#indicator li');
  const indicatorH = indicator.offsetHeight;
  const project = document.querySelector('#project');
  const projectY = Math.round(project.getBoundingClientRect().top);
  const projectScroll = projectY - indicatorH;

  f_moveScroll(indicatorBtnEls, projectScroll);
  f_scrollDetector(indicatorBtnEls, projectScroll);
};
// DELETE ACTIVE CLASS FROM BUTTONS
function deleteActive(indicatorBtnEls) 
{
  indicatorBtnEls.forEach((btn)=> 
  {
    btn.classList.remove('active');
  });
};
// MOVE PAGE SCROLL
function f_moveScroll(indicatorBtnEls, projectScroll) {
  indicatorBtnEls.forEach((btn)=>
  {
    const name = btn.getAttribute('name');

    btn.onclick=()=>
    {
      // MOVE SCROLL
      if(name === 'about') 
      {
        window.scrollTo({top: 0, behavior: 'smooth'});
      } 
      else if (name === 'project') 
      {
        window.scrollTo({top: projectScroll, behavior: 'smooth'});
      }
    };
  });
};

/* ADD ACTIVE CLASS TO INDICATOR */
/* WHEN SCROLL POSITION IS*/
/* IN THE CONTENET RANGE*/
function f_scrollDetector(indicatorBtnEls, projectScroll)
{
  window.onscroll = () => {
    deleteActive(indicatorBtnEls);
    if(projectScroll <= window.scrollY) {
      document.getElementsByName('project')[0].classList.add('active');
    } else {
      document.getElementsByName('about')[0].classList.add('active');
    }
  };
};



/* SET HTML */
const setHTML = function () 
{
  let rootPath;
  document.addEventListener('DOMContentLoaded',()=>
  {
    // LOADING INDEX.HTML
    rootPath = `/data/${lang}/index.html`
    fetchHTML(rootPath);
  });

};
if(location.pathname === "/")
{
  setHTML();
};