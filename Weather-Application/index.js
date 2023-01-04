import { getTheWeather } from "./fetchWeather";
import { SYMBOL_MAP } from "./symbolMap";

navigator.geolocation.getCurrentPosition(locationSucceed, locationFailed);

function locationSucceed({ coords }) {
  getTheWeather(
    coords.latitude,
    coords.longitude,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
    .then(supplyTheWeather)
    .catch(e => {
      console.error(e);
      alert("There was an Error while trying to get the weather.");
    });
}

function locationFailed() {
  alert(
    "There was an error in trying to get your location. Please permit us to use your location and refresh the page."
  );
}

function supplyTheWeather({ current, daily, hourly }) {
  supplyTheCurrentWeather(current);
  renderDailyWeather(daily);
  supplyTheHourlyWeather(hourly);
  document.body.classList.remove("obscure");
}

function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[statistics-${selector}]`).textContent = value;
}

function getIconUrl(iconCode) {
  return `symbols/${SYMBOL_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector("[statistics-current-symbol]");

function supplyTheCurrentWeather(current) {
  currentIcon.src = getIconUrl(current.iconCode);
  setValue("current-temperature", current.currentTemp);
  setValue("current-high", current.highTemp);
  setValue("current-low", current.lowTemp);
  setValue("current-feels-like-high", current.highFeelsLike);
  setValue("current-feels-like-low", current.lowFeelsLike);
  setValue("current-wind", current.windSpeed);
  setValue("current-precipitation", current.precip);
}

const dayOfWeek_Configuration = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const dailySection = document.querySelector("[statistics-day-of-week-component]");
const dayOfWeekBoardFigure = document.getElementById("daily-board-figure");

function renderDailyWeather(daily) {
  dailySection.innerHTML = "";
  daily.forEach(day => {
    const element = dayOfWeekBoardFigure.content.cloneNode(true);
    setValue("temperature", day.maxTemp, { parent: element });
    setValue("day-of-week", dayOfWeek_Configuration.format(day.timestamp), { parent: element });
    element.querySelector("[statistics-symbol]").src = getIconUrl(day.iconCode);
    dailySection.append(element);
  });
}

const hourlyProcessionFigure = document.getElementById("hourly-row-figure");
const hourComponent = document.querySelector("[statistics-hour-component]");
const hour_Configuration = new Intl.DateTimeFormat(undefined, { hour: "numeric" });

function supplyTheHourlyWeather(hourly) {
  hourComponent.innerHTML = "";
  hourly.forEach(hour => {
    const element = hourlyProcessionFigure.content.cloneNode(true);
    setValue("temperature", hour.temp, { parent: element });
    setValue("feels-like-temperature", hour.feelsLike, { parent: element });
    setValue("wind", hour.windSpeed, { parent: element });
    setValue("precip", hour.precip, { parent: element });
    setValue("day", dayOfWeek_Configuration.format(hour.timestamp), { parent: element });
    setValue("time", hour_Configuration.format(hour.timestamp), { parent: element });
    element.querySelector("[statistics-symbol]").src = getIconUrl(hour.iconCode);
    hourComponent.append(element);
  });
}
