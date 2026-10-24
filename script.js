/* dc3c16e1700a7e610e3156440d0e81a6; */

const date = document.getElementById("date");
const temp = document.getElementById("temp");
const place = document.getElementById("place");
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");
const ImageE = document.querySelector("img");

const months = [
  "Jan",
  "Fed",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "sep",
  "Oct",
  "Nov",
  "Dec",
];

let dateObj = new Date();
let month = months[dateObj.getMonth()];
let actualDate = dateObj.getDate();
let year = dateObj.getFullYear();

date.innerHTML = `${month} ${actualDate}, ${year}`;

const app = document.getElementById("app");

let button = document.querySelector("svg");

/* button.addEventListener("click", getWeather); */

const getWeather = async () => {
  let area = document.getElementById("area").value;
  const weatherFetch = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=dc3c16e1700a7e610e3156440d0e81a6`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );
  const weatherData = await weatherFetch.json();
  console.log(weatherData);
  place.innerHTML = `${weatherData.name}`;
  temp.innerHTML = `${weatherData.main.temp}C`;
  maxTemp.innerHTML = `${weatherData.main.temp_max}`;
  minTemp.innerHTML = `${weatherData.main.temp_min}`;
};
