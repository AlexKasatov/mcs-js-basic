const button = document.querySelector(".request");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".closePopup");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");

button.onclick = () => {
  popup.style.display = "flex";
};

closePopup.onclick = () => {
  popup.style.display = "none";
};

openMenu.onclick = () => {
  menu.style.left = "0";
};

closeMenu.onclick =  () => {
  menu.style.left = "-50vw";
};
