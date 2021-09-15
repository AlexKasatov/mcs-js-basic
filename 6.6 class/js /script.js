let users = {
  hasAccessToProfile: true,
  approved: true,
  sayHi: function () {
    return "Hi!";
  },
};

function user(name, email, password) {
  // конструктор
  this.name = name;
  this.email = email;
  this.password = password;
  this.__proto__ = users;
}

const alex = new user("Alex", "alex@gmail.com", "qwerty");

console.log(alex);

function fUser(name, email, password) {
  // конструктор
  this.name = name;
  this.email = email;
  this.password = password;
  this.__proto__ = users;
  this.sayHi = function () {
    return "Hi! " + this.name + " You registred ";
  };
}

const helga = new fUser("Helga", "helga@gmail.com", "qwerty");

console.log(helga.sayHi());

let parse;
