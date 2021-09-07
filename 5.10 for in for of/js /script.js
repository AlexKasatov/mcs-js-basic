const buttons = document.querySelectorAll("button");

for (button of buttons) {
  button.style.backgroundColor = "lightblue";
}

// for (key in buttons) {
//     buttons[key].style.backgroundColor = 'lightblue';
// }

let person = {
  name: "Alex",
  surname: "Morton",
  teacher: true,
};

for (key in person) {
  console.log(key);
  console.log(person[key]);
}
