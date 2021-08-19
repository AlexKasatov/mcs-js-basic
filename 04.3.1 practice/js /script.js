const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt("Your choice: 0 - rock, 1 - scissors, 2 - paper"));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if (player === rock && computer === scissors) {
  console.log("Ты победил! Ножницы затупились об камень");
} else if (player === rock && computer === paper) {
  console.log("Ты проиграл! У компа бумага");
} else if (player === scissors && computer === paper) {
  console.log("Победа! Ножницы режут бумагу!");
} else if (player === scissors && computer === rock) {
  console.log("Поражение! Ножницы затупились об камень :(");
} else if (player === paper && computer === rock) {
  console.log("Победа! Бумага накрывает камень! :)");
} else if (player === paper && computer === scissors) {
  console.log("Поражение! Ножницы режут бумагу :(");
} else if (player === computer) {
  console.log("Ничья!");
} else {
  location.reload(alert("Ввели не игровое число, используйте только 0, 1, 2 "));
  console.log("ввели не игровое число");
}
