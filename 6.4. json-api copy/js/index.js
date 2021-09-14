const myForm = document.forms[0];
let formValue = myForm[1].value;
const element = document.getElementById('insert')

const APIKEY = "b410debdf0251026955d60b4b62d0776";
let cityName = formValue;
const url =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=" +
  APIKEY;

  
function sendRequest() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, false);

  xhr.send();

  if (xhr.status != 200) {
    console.log(xhr.status + " " + xhr.statusText);
  } else {
    var DATA = JSON.parse(xhr.responseText);
    console.log(DATA);
    console.log(DATA.wind.speed)
    console.log(DATA.main.temp - 273)

    var temp = document.createElement('h1')
    var wind = document.createElement('h2')
    element.append(temp, wind)
    temp.textContent = (DATA.main.temp - 273) + ' градусов Цельсия';
    wind.textContent = 'Скорость ветра = '+ DATA.wind.speed
  }
}


myForm.onsubmit = function (e) {
  e.preventDefault();
  console.log("submited");
  cityName = formValue
  sendRequest()

};


