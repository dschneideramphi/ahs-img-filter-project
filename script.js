//script.js

let mainImg = document.querySelector("#mainImg");
let body = document.querySelector("#body");
let downGrayBtn = document.querySelector("#downGray");
let upGrayBtn = document.querySelector("#upGray");
let downContrastBtn = document.querySelector("#downContrast");
let upContrastBtn = document.querySelector("#upContrast");

let gray = 0;
let contrast = 100;
let hue = 0; //degrees
let brightness = 100;
let invert = 0;
let saturate = 100;
let blur = 0 //px

let bgRed = 0;
let bgGreen = 0;
let bgBlue = 0;

let applyFilterStyle = () => {
  mainImg.style.filter = `grayscale(${gray}%) contrast(${contrast}%) hue-rotate(${hue}deg) brightness(${brightness}%) invert(${invert}%) saturate(${saturate}%) blur(${blur}px)`;
}

let applyBgStyle = () => {
  body.style.background = `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`;
}

downGrayBtn.addEventListener("click", (e) => {
  gray -= 5;
  applyFilterStyle();
})

upGrayBtn.addEventListener("click", (e) => {
  gray += 5;
  applyFilterStyle();
})

downContrastBtn.addEventListener("click", (e) => {
  contrast -= 5;
  applyFilterStyle();
})

upContrastBtn.addEventListener("click", (e) => {
  contrast += 5;
  applyFilterStyle();
})
