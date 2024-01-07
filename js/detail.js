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
    const response = await fetch(`data/project/detail/${linkId}.html`);
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }

    const htmlContent = await response.text();
    return htmlContent;

  } catch(error) {
    console.error('Error fetching page:', error);
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
  projectLinksAnimation()
};


function projectLinksAnimation () {
  const projectLink = document.getElementById("projectLinks");
  const viewHeight = document.documentElement.clientHeight;
  let projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight;

  window.addEventListener("scroll", () => {
    // update projectLinkPosition
    if(projectLinkPosition !== document.documentElement.offsetHeight - projectLink.offsetHeight) {
      projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight;
    };

    if(window.scrollY + viewHeight + 50 >= projectLinkPosition) {
      document.getElementById('projectLinks').style.transform = "translateY(0)";
      document.getElementById('projectLinks').style.opacity = 1;
    }
  });
};