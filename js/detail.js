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

async function drawHtml () {
  const fetchedHtml = await fetchPage();
  const body = document.querySelector(".body-container");
  if(!fetchedHtml) {
    // body.innerHTML
  }
  body.innerHTML = fetchedHtml;
};

drawHtml(); 
