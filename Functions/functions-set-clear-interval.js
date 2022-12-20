function startTheClock() {
  intervalId = setInterval(tickTheClock, 1000);
}

function tickTheClock() {
  const clockers = document.querySelectorAll('.clocko');
  let todaysDate = new Date();
  let timeDisplay = todaysDate.toLocaleTimeString();
  clockers.forEach(item => {
    item.innerHTML = timeDisplay;
  });
}

function stopTheClock() {
  clearInterval(intervalId);
}

let intervalId;
