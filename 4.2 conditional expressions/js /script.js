console.log("You are at " + window.location);

const Image = document.querySelector(".imageBlock");
let answer = parseInt(prompt("Сколько тебе лет?"));

if (answer < 18) {
  Image.style.backgroundImage = "url(./img/cat.jpg)";
} else if (answer <= 25) {
  Image.style.backgroundImage = "url(./img/trip-scan-002.png)";
} else if (answer >= 25) {
  Image.style.backgroundImage = "url(./img/screen.png)";
} else {
  Image.style.backgroundImage = "url(./img/screen2.png)";
}
