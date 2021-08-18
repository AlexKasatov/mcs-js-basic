const answer = parseFloat(prompt("Введите любое число"));

if (answer >= 0) {
  console.log("Ваше число по модулю = " + answer);
} else if (answer < 0) {
  console.log("Ваше число по модулю = " + answer * -1);
} else {
  location.reload(alert("'Ввели не число!'"));
}
