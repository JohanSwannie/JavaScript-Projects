const measureWH = document.getElementById('textAreaTag');
const bodyMan = document.getElementById('body');

document.getElementById('WDisplay').innerHTML = `The Width of the textarea is ${measureWH.clientWidth}`;
document.getElementById('HDisplay').innerHTML = `The Height of the textarea is ${measureWH.clientHeight}`;
document.getElementById('BWDisplay').innerHTML = `The Width of the Body is ${bodyMan.offsetWidth}`;
document.getElementById('BHDisplay').innerHTML = `The Height of the Body is ${bodyMan.offsetHeight}`;
document.getElementById('WWDisplay').innerHTML = `The Width of the Window is ${window.innerWidth}`;
document.getElementById('WHDisplay').innerHTML = `The Height of the Window is ${window.innerHeight}`;

function handleResize() {
  document.getElementById('BWDisplay').innerHTML = `The Width of the Body is ${bodyMan.offsetWidth}`;
  document.getElementById('WWDisplay').innerHTML = `The Width of the Window is ${window.innerWidth}`;
  document.getElementById('WHDisplay').innerHTML = `The Height of the Window is ${window.innerHeight}`;
}

window.addEventListener('resize', handleResize);

measureWH.onmouseup = function() {
  document.getElementById('WDisplay').innerHTML = `The Width of the textarea is ${measureWH.clientWidth}`;
  document.getElementById('HDisplay').innerHTML = `The Height of the textarea is ${measureWH.clientHeight}`;
  document.getElementById('BHDisplay').innerHTML = `The Height of the Body is ${bodyMan.offsetHeight}`;
};
