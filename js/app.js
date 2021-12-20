'use strict';

const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for (let i = 0; i < imgContent.length; i++) {
    let x = e.pageX;
    let y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

document.addEventListener('mousemove', showImgContent);
