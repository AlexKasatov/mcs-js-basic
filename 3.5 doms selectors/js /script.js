console.log("You are at " + window.location);

const byTag = document.getElementsByTagName("div");

const byClass = document.getElementsByClassName("myClass");

const byId = document.getElementById("myId");

console.log(byTag, byClass, myId);

const allBySelector = document.querySelectorAll(".coolClass.mine");

const firstBySelector = document.querySelector("div");

console.log(allBySelector);

console.log(firstBySelector);

const quest = prompt("Что хотите написать на странице?");

// byId.innerHTML = "<h2>Hello World!</h2>";

byId.innerHTML = quest;

firstBySelector.innerHTML = "<p>This is body text</p>";
