function getTheTime() {
  const clocker1 = document.getElementById('clock1');
  const clocker2 = document.getElementById('clock2');
  const clocker3 = document.getElementById('clock3');
  const clocker4 = document.getElementById('clock4');
  const clocker5 = document.getElementById('clock5');
  return setInterval(() => {
    let todaysDate = new Date();
    let timeDisplay = todaysDate.toLocaleTimeString();
    clocker1.innerHTML = timeDisplay;
    clocker2.innerHTML = timeDisplay;
    clocker3.innerHTML = timeDisplay;
    clocker4.innerHTML = timeDisplay;
    clocker5.innerHTML = timeDisplay;
  }, 1000);
}

getTheTime();
