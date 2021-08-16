const Body = document.querySelector("body");
Body.style["background-color"] = "#696969";
Body.style.fontFamily = "Arial, Helvetica, sans-serif";
Body.style.fontSize = "2rem ";

const PageMain = document.querySelector(".page");
PageMain.style["color"] = "ghostwhite";

const PersonName = document.querySelector(".name");
PersonName.textContent = "DJ Rashad";

const PersonImage = document.querySelector("img");
PersonImage.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DJ_Rashad_2013.jpg/1920px-DJ_Rashad_2013.jpg"
);
PersonImage.style["width"] = "500px";

const HeadingHero = document.querySelector("h1");
HeadingHero.style.fontSize = "4rem";

const BodyText = document.querySelector(".short-bio");
BodyText.className += " animated";
