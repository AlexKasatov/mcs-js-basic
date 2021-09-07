const barWidth = document.querySelectorAll(".price_block__price-bar");
console.log(barWidth);

const placeHolder = document.querySelectorAll(".price-block__price");
console.log(placeHolder);

const form = document.forms[0];
console.log(form[0]);

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("submited");
  placeHolder[0].textContent = form.change.value;
};

let btc = function (priceItem) {
  placeHolder[0].textContent = priceItem;
};

let etc = function (priceItem) {
  placeHolder[1].textContent = priceItem;
};

let ltc = function (priceItem) {
  placeHolder[2].textContent = priceItem;
};

//change the price in braces
let btcPrice = btc(333333);
let etcPrice = etc(34200);
let ltcPrice = ltc(120330);

const priceBtc = parseFloat(placeHolder[0].textContent);

const priceEth = parseFloat(placeHolder[1].textContent);

const priceLtc = parseFloat(placeHolder[2].textContent);

const totalPrice = priceBtc + priceEth + priceLtc;
const prBtc = (priceBtc * 100) / totalPrice;
const prLtc = (priceEth * 100) / totalPrice;
const prEtc = (priceLtc * 100) / totalPrice;

barWidth[0].style.width = "" + prBtc + "%";
barWidth[1].style.width = "" + prEtc + "%";
barWidth[2].style.width = "" + prLtc + "%";

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("submited");
  placeHolder[0].textContent = form.change.value;
};

// const totalPrice = priceBtc + priceEth + priceLtc;
// const prBtc = (priceBtc * 100) / totalPrice;
// const prLtc = (priceLtc * 100) / totalPrice;
// const prEtc = (priceEth * 100) / totalPrice;

// barWidth[0].style.width = "" + prBtc + "%";
// barWidth[1].style.width = "" + prEtc + "%";
// barWidth[2].style.width = "" + prLtc + "%";
