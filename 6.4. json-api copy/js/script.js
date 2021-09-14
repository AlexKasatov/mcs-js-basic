const APIKEY = "b410debdf0251026955d60b4b62d0776";
let cityName = 'kyiv'
const url =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
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
  // document.write(DATA.main.temp - 273);
}

const popUp = document.querySelector(".pop-up-container");
const myForm = document.forms[0];
let state = "none";


myForm.onsubmit = function (e) {
  e.preventDefault();
  console.log("submited");
  popUp.style.display = "flex";
  cityName = myForm[1].value
  
};



// let userReqFun = () => {
//   return myForm[1].value
// };

