function generateHexColor() {
  let hexColor = '';
  counter ++;
  setColorsParameters = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
  let randomOne = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomTwo = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomThree = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomFour = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomFive = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let randomSix = setColorsParameters[Math.floor(Math.random() * setColorsParameters.length)];
  let allRandomsTogether =  randomOne + randomTwo + randomThree + randomFour + randomFive + randomSix;
  hexColor = '#' + allRandomsTogether;
  let diffy = document.createElement('div');
  diffy.className = "differ";
  diffy.style.backgroundColor = hexColor;
  let diffyText = document.createTextNode(hexColor);
  diffy.appendChild(diffyText);
  wrappy.appendChild(diffy);
  if (counter === 108) {
    clearInterval(mainInterval);
    document.getElementById('butty').style.display = 'block';
  }
}

const wrappy = document.querySelector('.container');

let counter = 0;

let mainInterval = setInterval(generateHexColor, 30);
