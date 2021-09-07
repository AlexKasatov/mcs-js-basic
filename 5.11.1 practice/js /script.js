let newSchool = [
  [
    ["Lil Yachty", "Playboi Carti", "Lil Uzi Vert"],
    ["Sonny Digital", "Metro Boomin", "12Hunna"],
  ],
  [
    ["Yung Lean", "Ecco2K", "Bladee"],
    ["Whitearmor", "PJ Beats", "Yung Gud"],
  ],
];

// тут мы выбрали все элементы из массива newSchool, которые также являются массивами

//   newSchool.forEach((element) => {
//      for(key of element) {
//          console.log((key))
//         };
//      })

newSchool.forEach((element) => {
  for (key of element) {
    key.forEach((names) => {
      console.log(names);
    });
  }
});
// дальше мы достанем все элементы в массивах key.forEach((names)

// newSchool.forEach((element) => {
//   for (key of element) {
//     //  console.log((key))
//     console.log(key);
//   }
// });
