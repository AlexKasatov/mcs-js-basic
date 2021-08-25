var a = "hi!";

function myFunk() {
  a = "Hello";
  return a;
}

console.log(a);

function myFunk2() {
  var b = 3;
  console.log(b);
}

console.log(myFunk2());

if (true) {
  var c = 5;
  let d = 3;
}

console.log(c); //  5
console.log(d); // error
