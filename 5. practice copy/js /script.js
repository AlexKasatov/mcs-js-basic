const barWidth = document.querySelectorAll(".price_block__price-bar");
console.log(barWidth);

const coinValue = document.querySelectorAll(".price-block__price");
console.log(coinValue);

const form = document.forms[0];
console.log(form);

let formBtc = document.forms[0][0];
let formEth = document.forms[0][2];
let formLtc = document.forms[0][4];

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("submited");
  coinValue[0].innerHTML = formBtc.value;
  barWidth[0].style.width = "" + formBtc.value / 100 + "%";
  coinValue[1].innerHTML = formEth.value;
  barWidth[1].style.width = "" + formEth.value / 100 + "%";
  coinValue[2].innerHTML = formLtc.value;
  barWidth[2].style.width = "" + formLtc.value / 100 + "%";
};
