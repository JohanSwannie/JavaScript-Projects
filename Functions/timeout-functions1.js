function getTheTime() {
  const clockers = document.querySelectorAll('.clocko');
  return setInterval(() => {
    let todaysDate = new Date();
    let timeDisplay = todaysDate.toLocaleTimeString();
    clockers.forEach(item => {
      item.innerHTML = timeDisplay;
    });
  }, 1000);
}

getTheTime();
