

//old style
// let myText = function (element, text) {
//   element.innerHTML = text;
// };

// myText(document.body, 'Hello')

//ES6

// let myText = (element, text) => {
//   element.innerHTML = text;
// };

// myText(document.body, "Hello Man!");

//variant one sting

// let myText2 = (element, text) => (element.innerHTML = text);

// myText2(document.body, "Hello Girl!");

//some practice

const heading = document.querySelector('h1')
const bodyText = document.querySelector('p')


let myText3 = (element, color, font) => {
  element.style.color = color;
  element.style.fontSize = font;
};


myText3(heading, "red", "100px")

myText3(bodyText, "white", "20px")