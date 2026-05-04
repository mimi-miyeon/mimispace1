const headerImg = [
  { src: 'visual1.png' },
  { src: 'visual2.png' },
  { src: 'visual3.png' },
  { src: 'visual4.png' },
  { src: 'visual5.png' },
  { src: 'visual6.png' },
  { src: 'visual7.png' },
  { src: 'visual8.png' },
  { src: 'visual9.png' },
  { src: 'visual10.png' },
  { src: 'visual11.png' },
  { src: 'cranky.png',   alt: '짜증난' },
  { src: 'sleep.png',    alt: '잠자는' },
  { src: 'snowball.gif', alt: '스노우볼 캐릭터' },
  { src: 'walk.gif',     alt: '산책가자' },
  { src: 'space.png',    alt: '우주인 우주견' },
  { src: 'showoff.png',  alt: '뽐내는 스노우볼' },
  { src: 'yay.png',      alt: '야호야호' },
  { src: 'chill.png',    alt: '뒹굴뒹굴' },
  { src: 'mountain.png', alt: '설산' },
];

export function f_header_img() {
  const selectedImg = headerImg[Math.floor(Math.random() * headerImg.length)];
  const headerImgEl = document.getElementById('headerImg');
  headerImgEl.setAttribute('src', `images/${selectedImg.src}`);
  headerImgEl.setAttribute('alt', selectedImg.alt || '');
}
