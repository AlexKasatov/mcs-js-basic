let people = ["Alex", "John", "Marry"];

console.log(people);

console.log(people[0]);

people[1] = "Max";

console.log(people);

console.log(people.length);

let bigArray = [
  [1, 2, 3],
  [true, false],
  ["a", "b", "c"],
];

console.log(bigArray[0][1]);

let bigObject = {
  names: ["Alex", "John", "Marry"],
  grades: [
    {
      intern: 1,
      junior: 2,
    },
    {
      middle: 3,
      senior: 4,
    },
  ],
};

console.log(bigObject.names[0]);

console.log(bigObject.grades[0].junior);
