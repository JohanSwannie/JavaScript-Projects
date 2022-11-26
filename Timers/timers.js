const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');

setTimeout(() => {
  p2.innerHTML = 'Task was delayed for 10 seconds';
}, 10000, p1.innerHTML = "Please wait 10seconds");

let value1 = 1;
let addInterval;

function startInterval() {
  addInterval = setInterval(function() {
    p5.innerHTML = '';
    p4.innerHTML = value1;
    value1++;
  }, 500, p3.innerHTML = 'value will be added every half a second');
}

function stopInterval() {
  clearInterval(addInterval);
  p5.innerHTML = 'The add Interval has now been cleared';
}
