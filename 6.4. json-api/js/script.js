const APIKEY = "b410debdf0251026955d60b4b62d0776";
const city = "kyiv";
const url =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKEY;

let xhr = new XMLHttpRequest();

xhr.open("GET", url, false);

xhr.send();

if (xhr.status != 200) {
  console.log(xhr.status + " " + xhr.statusText);
} else {
  let DATA = JSON.parse(xhr.responseText);
  console.log(DATA);
  document.write(DATA.main.temp - 273);
}
