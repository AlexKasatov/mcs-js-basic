console.log("You are at " + window.location);

const image = document.querySelector("img");

image.hasAttribute("alt");

console.log(image.hasAttribute("alt"));

image.removeAttribute("alt");
console.log(image.hasAttribute("alt"));

console.log(image.getAttribute("src"));

image.setAttribute("src", "./img/cat.jpg");

image.getAttribute("src");

console.log(image.getAttribute("src"));

image.hasAttribute("src");

console.log(image.hasAttribute("src"));
