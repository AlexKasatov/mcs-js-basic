class Tiger {
  constructor(name) {
    this.name = name;
  }
  feedCat() {
    return console.log("purrrrr");
  }
}

class angryTiger extends Tiger {
  throwDart() {
    return console.log("ZzZzzZzZz");
  }
}

const tigerJohn = new Tiger('John')
console.log(tigerJohn.name);
console.log(tigerJohn.feedCat());

const tigerBob = new angryTiger('Bob')
console.log(tigerBob.name);
console.log(tigerBob.feedCat());
console.log(tigerBob.throwDart());