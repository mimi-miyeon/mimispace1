/**
 * 
 * 프로젝트 페이지 불러오기
 * 
 */
// index에서 전달받은 id값으로 페이지 파일 가져오기
async function fetchPage () {
  var urlParams = new URLSearchParams(window.location.search);
  var linkId = urlParams.get('id');

  try {
    const response = await fetch(`data/ko/project/detail/${linkId}.html`);
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }

    const htmlContent = await response.text();
    return htmlContent;

  } catch(error) {
    console.error('Error fetching page:', error);
    alert("준비중 입니다.")
    window.history.back();
    return null;
  };
};

// 가져온 페이지 그리기
async function drawHtml () {
  const fetchedHtml = await fetchPage();
  const body = document.querySelector(".body-container");
  if(!fetchedHtml) {
    // 가져올 수 없음 표시
  }
  body.innerHTML = fetchedHtml;
  animation();
};
drawHtml();


/**
 * 
 * 애니메이션 실행
 * 
 */
function animation () {

  // #headerBg translateY 변경
  setTimeout(function () {
    document.getElementById("headerBg").style.transform = "translateY(0)";
  }, 100);

  // #projectDescription translateY 변경
  setTimeout(function () {
    document.getElementById("projectDescription").style.transform = "translateY(0)";
  }, 1100);

  // #headerTitle translateY 변경
  setTimeout(function () {
    document.getElementById("headerTitle").style.transform = "translateY(0)";
  }, 600);

  // projectLink 변수
  const urlLocation = new URLSearchParams(window.location.search).get('id');
  if(new URLSearchParams(window.location.search).get('id') !== 'graphicDesign'){
    if(urlLocation !== 'photoRetouch') {    
      projectLinksAnimation();
    };
  };
};

// 하단 프로젝트 링크 애니메이션
const urlLocation = new URLSearchParams(window.location.search).get('id');
if(urlLocation !== 'graphicDesign'){
  if(urlLocation !== 'photoRetouch') {    
    function projectLinksAnimation () {
      const projectLink = document.getElementById("projectLinks");
      const viewHeight = document.documentElement.clientHeight;
      let projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight;

      window.addEventListener("scroll", () => {
        // update projectLinkPosition
        if(projectLinkPosition !== document.documentElement.offsetHeight - projectLink.offsetHeight) {
          projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight;
        };

        if(window.scrollY + viewHeight + 150 >= projectLinkPosition) {
          document.getElementById('projectLinks').style.transform = "translateY(0)";
          document.getElementById('projectLinks').style.opacity = 1;
        }
      });
    };
  }
}

// Using navigator.language
const userLanguage = navigator.language || navigator.userLanguage || "ko";
document.documentElement.lang = userLanguage;