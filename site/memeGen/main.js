const imageFileInput = document.querySelector('#imageFileInput');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
const canvas = document.querySelector('#meme');

let image;

imageFileInput.addEventListener('change', () => {
  const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener('load', () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
  }, { once: true });
});

// topText updated > draw canvas again
topTextInput.addEventListener('keyup', () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

// bottomText updated > draw canvas again
bottomTextInput.addEventListener('keyup', () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;
  // Upadate canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image,0 ,0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;
  
  // Add topText
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);
  
  // Bottom topText
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);

  // img download
  const canvasUrl = canvas.toDataURL('image.jpg');
  const a = document.createElement('a');
  a.href = canvasUrl;
  a.download = 'canvas_image.jpg';
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.onclick = () => {
    a.click();
  };
};