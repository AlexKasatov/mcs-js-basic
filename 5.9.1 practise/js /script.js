let myArr = [];
const insert = (document.body.innerHTML = "<p></p>");
const myPar = document.getElementsByTagName("p");

for (var value = 0; value <= 10000; value++) {
  if (value % 6 === 0) {
    myArr.push(value);
    myPar[0].innerHTML = myArr;
  }
}

// получили массив myArr из чисел, которые без остатка делятся на 6

// let insert = (document.body.innerHTML = "<p></p>");

// let myPar = document.getElementsByTagName("p");

// myPar[0].innerHTML = myArr;

// myPar[0].style.color = "blue";
