const diffy = document.querySelector('.container');

for (var i = 0; i < 96; i++) {
  const butty = document.createElement('button');
  butty.setAttribute('class', 'blocks');
  diffy.appendChild(butty);
}

function generateHexColor() {
  let hexColor = '';
  setColorsParameters = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
  let randomOne = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomTwo = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomThree = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomFour = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomFive = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomSix = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let allRandomsTogether =  randomOne + randomTwo + randomThree + randomFour + randomFive + randomSix;
  hexColor = '#' + allRandomsTogether;
  colorArray.push(hexColor);
}

let colorArray = [];

let selectorArray = '.container :nth-child(';

for (var i = 0; i < 400; i++) {
  generateHexColor();
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function fillTheBlocks() {
  counter ++;
  let color = colorArray[Math.floor(Math.random() * colorArray.length)];
  let blockNumber = parseInt(Math.floor(Math.random() * 96) + 1);
  let buttonToBeChanged = document.querySelector(selectorArray + blockNumber + ')');
  buttonToBeChanged.style.backgroundColor = color;
  let styleOfButton = getComputedStyle(buttonToBeChanged);
  let colorOfButton = styleOfButton['background-color'];
  let rgbParameters = colorOfButton.replace(/[^\d.-]/g, '');
  let red = '';
  let green = '';
  let blue = '';
  for (var i = 0; i < rgbParameters.length; i++) {
    if (i < 3) {
      red += rgbParameters[i];
    } else if (i > 2 && i < 6) {
      green += rgbParameters[i];
    } else {
      blue += rgbParameters[i];
    }
  }
  let hexColor = '';
  hexColor = rgbToHex(red, green, blue);
  if (hexColor.substring(0, 5) === '#face') {
    document.getElementById('youWin').innerHTML = `You have hit the Jackpot after ${counter} color variations`;
    clearInterval(mainInterval);
  }
}

let counter = 0;

let mainInterval = setInterval(fillTheBlocks, 100);
