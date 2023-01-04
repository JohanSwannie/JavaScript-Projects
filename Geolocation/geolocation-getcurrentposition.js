let errMsg = document.getElementById('errorMsg');
let latty = document.getElementById('latitude');
let longy = document.getElementById('longitude');

function displayYourLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  latty.style.display = 'block';
  longy.style.display = 'block';
  latty.innerHTML = `Latitude : ${lat}`;
  longy.innerHTML = `Longitude: ${lon}`;
}

function locationFailed(err) {
  if (err.code == 1) {
    errMsg.style.display = 'block';
    errMsg.innerHTML = "Access to this feature is denied!";
  } else if (err.code == 2) {
    errMsg.style.display = 'block';
    errMsg.innerHTML = "Sorry, your position is currently unavailable!";
  }
}

function getYourLocation() {
  if (navigator.geolocation) {
    let extra = {
      timeout: 60000
    };
    navigator.geolocation.getCurrentPosition(displayYourLocation, locationFailed, extra);
  } else {
    errMsg.style.display = 'block';
    errorMsg.innerHTML = "Sorry to disappoint you, but your browser does not support geolocation!";
  }
}
