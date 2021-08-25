const button = document.querySelector("button");
const par = document.querySelector("p");
const bodyColor = document.querySelector("body");
const buttonColor = document.getElementById("button");

let state = "none";
let bcColor = "grey";

button.addEventListener("click", function () {
  if (state == "none") {
    par.style.display = "block";
    state = "block";
  } else {
    par.style.display = "none";
    state = "none";
  }
});

buttonColor.addEventListener("click", function () {
  if (bcColor == "grey") {
    bodyColor.style.backgroundColor = "green";
    bcColor = "green";
  } else {
    bodyColor.style.backgroundColor = "grey";
    bcColor = "grey";
  }
});
