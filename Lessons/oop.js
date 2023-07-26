/* 
? Object Oriented Programming (OOP)
!APIE
    * Abstraction
        * obfuscation of implementation detail (hide complexity)
        * let the computer do the work. create a function/variable, call the variable. keep it simple
    * Polymorphism
        * ability of using the same constructor for different object instances
    * Inheritance
        * sharing of methods and properties
    * Encapsulation
        * dealing with scope (things within a container work together)
*/

// ? Abstraction example
function myOwnLog(str) {
  let process = require("process");
  process.stdout.write(str);
}

myOwnLog("example of no abstraction \n");
console.log("example of abstraction");

// ? Polymorphism example

class Human {
  constructor(name) {
    this.name = name;
    this.species = "Human";
  }
}

let brent = new Human("Brent");
let paul = new Human("Paul");
console.log(brent, paul);

//? inheritance example

class Teacher extends Human {
  constructor(name) {
    super(name);
    this.profession = "Teacher";
  }
}

let mary = new Teacher("Mary");
console.log(mary);

//? encapsulation example

function fxScope() {
  let fxsVar = "This is a function scope";
  console.log(fxsVar);
}
// console.log(fxsVar); //ReferenceError - hidden from this scope
fxScope();
