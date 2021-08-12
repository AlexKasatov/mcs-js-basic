let totalCash = prompt("Йо, Кевин, сколько кеша у тебя в наличии?");

let watchesCount = prompt("Сколько часов ты взял?");

let earringsCount = prompt("Ага, а сколько сережек с брилиантами?");

let watchesCost = prompt("Сколько стоят часы?");

let earringsCost = prompt("Сколько стоят сережки?");

let earringsSum = parseInt(earringsCount) * parseInt(earringsCost);

let watchesSum = parseInt(watchesCount) * parseInt(watchesCost);

let totalPurchases = earringsSum + watchesSum;

let totalBalance = totalCash >= totalPurchases;

document.body.innerHTML =  totalBalance
