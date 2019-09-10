//script.js

//TODO: Edit the HTML to add the additional buttons we need for our code!
//TODO: Grab all of the buttons we need from the HTML
//TODO: Add event listeners for each of the buttons
//TODO: WHEN you click a button, it changes the variable for that filter property
//TODO: Edit the filter string so it includes the additional filter values (like invert and brightness, etc)
  //Note: you will need to copy-and-paste the filter string into each onEvent once you edit it.
  //Next week, we'll learn how to make *functions* which will make this process easier in the future
//TODO: Make the Reset button switch everything back to default
//TODO: Add a button that says "Change Picture" so when you click it, it will prompt you for a new picture to use instead
//TODO: Add two classes with pre-made filter properties that you think makes cool
//TODO: Add two buttons so that, when you click each button, it applies the class to the image.
  //Note: Think of this as a 'quick filter' button (similar to what Instagram does) that applies
  //a pre-made filter to an image
//TODO: Think of at least 1 other feature to add to this program


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

downGrayBtn.addEventListener("click", (e) => {
  gray -= 5;
  mainImg.style.filter = `grayscale(${gray}%) contrast(${contrast}%) hue-rotate(${hue}deg) blur(${blur}px)`;
})

upGrayBtn.addEventListener("click", (e) => {
  gray += 5;
  mainImg.style.filter = `grayscale(${gray}%) contrast(${contrast}%) hue-rotate(${hue}deg) blur(${blur}px)`;
})

downContrastBtn.addEventListener("click", (e) => {
  contrast -= 5;
  mainImg.style.filter = `grayscale(${gray}%) contrast(${contrast}%) hue-rotate(${hue}deg) blur(${blur}px)`;
})

upContrastBtn.addEventListener("click", (e) => {
  contrast += 5;
  mainImg.style.filter = `grayscale(${gray}%) contrast(${contrast}%) hue-rotate(${hue}deg) blur(${blur}px)`;
})
