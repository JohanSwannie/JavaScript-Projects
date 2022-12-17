function changeColor(color) {
  return function() {
    document.body.style.background = color;
    const bordie = document.querySelectorAll('.butty');
  };
}

const bgColorOrange = changeColor('orange');
const bgColorRed = changeColor('red');
const bgColorGreen = changeColor('green');
const bgColorBlue = changeColor('blue');
const bgColorOlive = changeColor('olive');

document.getElementById('orange').addEventListener('click', bgColorOrange);
document.getElementById('red').addEventListener('click', bgColorRed);
document.getElementById('green').addEventListener('click', bgColorGreen);
document.getElementById('blue').addEventListener('click', bgColorBlue);
document.getElementById('olive').addEventListener('click', bgColorOlive);
