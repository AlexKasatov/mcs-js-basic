console.log("You are at " + window.location);

// function sayHi() {
//   return "Привет, студент!";
//   // console.log('Privet!');
// }

// console.log(sayHi());

// alert(sayHi());

// document.body.innerHTML = sayHi();

// function sayName(name) {
//   return "Privet " + name;
// }

// console.log(sayName("Alex"));
// console.log(sayName("John"));

//some practise

function testing(name) {
  return (document.body.innerHTML = name);
}

let drawCats = (howManyTime) => {
  for (let i = 1; i < howManyTime; i++ ) {
    console.log(i + "=^.^=");
  }
};
