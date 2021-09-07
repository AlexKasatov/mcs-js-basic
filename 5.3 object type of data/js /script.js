let person = {
  name: "Alex",
  surname: "Morton",
  age: 30,
  writer: true,
  sayHello: function () {
    return "Hello " + this.name;
  },
};

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;

console.log(person);

person.age = 18;

console.log(person);

console.log(person["surname"]);
console.log(person.surname);
