const answer = parseFloat(prompt("Введите любое число"));

answer >= 0
  ? console.log("Ваше число по модулю = " + answer)
  : console.log("Ваше число по модулю = " + answer * -1);
