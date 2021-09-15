class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  sayHi() {
    return "Hello " + this.name;
  }
}

class Female extends User {
  sayHi() {
    return "Wazzup " + this.name + "! you registred";
  }
}

const man = new User("alex", "email@gmail.com", "qwerty");
const woman = new Female("anna", "anna@gmail.com", "qwerty");
