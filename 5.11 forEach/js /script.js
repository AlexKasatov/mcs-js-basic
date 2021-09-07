const button = document.querySelector("button");

let lorem = document.querySelectorAll(".text");

button.onclick = () => {
  lorem.forEach((item) => {
    item.style.fontSize = "40px";
  });
};

const buttonHeading = document.querySelector(".button-bg");

const headings = document.querySelectorAll("h4");

// buttonHeading.onclick = () => {
//   headings.forEach((head) => {
//     head.style.backgroundColor = "green";
//   });
// };

buttonHeading.onclick = () => {
  headings.forEach(function (head) {
    head.style.backgroundColor = "green";
  });
};
