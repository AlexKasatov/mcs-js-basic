const form = document.forms[0];

const userNum = document.querySelector(".angleNumber");
const result = document.querySelector(".total");

console.log(userNum);
console.log(result);

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("submited");
  userNum.innerHTML = form.angle.value;
  result.innerHTML = Math.sin(form.angle.value);
};
