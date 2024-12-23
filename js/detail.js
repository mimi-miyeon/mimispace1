// import { lang } from "./init.js";
let lang = sessionStorage.getItem("lang");

/* LOADING DETAIL PAGE HTML */
/* GET ID PARAM TO FETCH THE SAME NAME FILE */
async function fetchPage () 
{
  const urlParams = new URLSearchParams(window.location.search);
  const linkId = urlParams.get('id');
  const errorMsg = (lang === "ko") ? "아직 준비가 덜 됐네요😲" : "Not quite ready yet😲";

  try 
  {
    const response = await fetch(`./data/${lang}/project/detail/${linkId}.html`);

    if(!response.ok) 
    {
      throw new Error('Network response was not ok');
    }

    const htmlContent = await response.text();
    return htmlContent;

  } 
  // WHEN FILE IS NOT FOUND
  catch(error) 
  {
    console.error('Error fetching page:', error);
    alert(errorMsg);
    window.history.back();
    return null;
  };
};

// video play control
function videoControl() {
  const videoWrap = document.querySelectorAll('.mobile-video');
  if (videoWrap){
    videoWrap.forEach(videoWrap =>{
      const video = videoWrap.querySelector("video");
      const playIcon = videoWrap.querySelector(".icon_play");

      video.addEventListener("ended",()=>{
        playIcon.style.display = "flex";
        video.style.opacity = .8;
      });
      videoWrap.querySelector(".icon_play").addEventListener('click',()=>{
        // video.paused ?  : 
        if(video.paused){
          video.play();
          video.style.opacity = 1;
          playIcon.style.display = "none";
        }
        else {
          video.pause();
          video.style.opacity = .8;
          playIcon.style.display = "flex";
        }
      });
      video.addEventListener('click',()=>{
        // video.paused ?  : 
        if(video.paused){
          video.play();
          video.style.opacity = 1;
          playIcon.style.display = "none";
        }
        else {
          video.pause();
          video.style.opacity = .8;
          playIcon.style.display = "flex";
        }
      });
    });
  };
};
/* DRAW HTML */
async function drawHtml () {
  const fetchedHtml = await fetchPage();
  const body = document.querySelector(".body-container");
  if(!fetchedHtml) {
    // 가져올 수 없음 표시 필요
    console.log("Failed to fetch");
  }
  body.innerHTML = body.innerHTML + fetchedHtml;
  animation();
  videoControl();
  

  // swiper
  const whowhoOnboarding = new Swiper('#whowhoOnboarding', {
    slidesPerView: 1,
    spaceBetween: 0,
  });
};
drawHtml();


/* ANIMATION FUNCTION */
function animation () {
  // HEADER BACKGROUND DROPS
  setTimeout(function () {
    document.getElementById("headerBg").style.transform = "translateY(0)";
  }, 100);

  // PROJECT DESCRIPTION RISE UP
  setTimeout(function () {
    document.getElementById("projectDescription").style.transform = "translateY(0)";
  }, 1100);

  // PROJECT TITLE RISE UP
  setTimeout(function () {
    document.getElementById("headerTitle").style.transform = "translateY(0)";
  }, 600);


  // PROJECT SITE BUTTON ANIMATION
  if(document.getElementById("projectLinks"))
  {
    projectLinksAnimation();
  };
};

/* ANIMATION FOR VISITING PROJECT SITE BUTTON AT THE BOTTOM  */
function projectLinksAnimation () 
{
  const projectLink = document.getElementById("projectLinks");
  const viewHeight = document.documentElement.clientHeight;
  let projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight;

  window.addEventListener("scroll", () => 
  {
    if(projectLinkPosition !== document.documentElement.offsetHeight - projectLink.offsetHeight) 
    {
      projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight;
    };

    if(window.scrollY + viewHeight + 150 >= projectLinkPosition) {
      document.getElementById('projectLinks').style.transform = "translateY(0)";
      document.getElementById('projectLinks').style.opacity = 1;
    }
  });
};
