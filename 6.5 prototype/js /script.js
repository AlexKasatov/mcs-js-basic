let animal = {
  canEat: true,
  hasParents: true,
};

let cow = {
  givesMilk: true,
  __proto__: animal,
};

console.log(cow.givesMilk);

console.log(cow.canEat);

for (key in cow) {
  console.log(key);
}
