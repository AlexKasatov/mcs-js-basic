const items = document.getElementsByTagName("li");

let counter = 0;

// while(индекс элемента меньше длинны массива) {

// }

// while (counter < items.length) {
//   items[counter].innerHTML = counter + 1;
//   counter++;
// }

const heading = document.getElementsByTagName("h5");

console.log(heading);

// while (counter < heading.length) {
//   heading[counter].innerHTML = counter + 1;
//   counter++;
// }

// while (counter < 5) {
//     console.log(counter + 1);
//     counter++;
// }

// let drawCats = function (howMany) {
//     for( let i = 0; i < howMany; i++) {
//         console.log(i + 'kitty face');
//     }
// };

while (counter < 3) {
  heading[counter].innerHTML = counter + 1;
  counter++;
}
