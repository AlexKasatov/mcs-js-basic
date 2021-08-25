// console.log(this);

// window.onscroll = function () {
//   console.log(this);
// };

const button = document.querySelector("button");

// // button.onclick = function () {
// //   console.log(this);
// // };

// button.onclick = function () {
//     this.innerHTML = 'Pressed';
//   };

button.onclick = () => {
  console.log(this);
};                    
