/* 
? Classes
* templates or blueprints for creating objects
* they encapsulaate data with code
* JS is a prototype-based language with access to OOP prrinciples
* Classes are considered special functions. They can be defined as:
    * class declarations
    * class expressions
*classes (like function declarations) are hoisted

*/

//  ? Class Declaration
// constructor can take input if you want to be able to adjust it, or only predefined properties

class Instructor {
  // method used to create and initialize an object
  constructor(name, subject, tenure, isPolyglot) {
    this.name = name;
    this.subject = subject;
    this.tenure = tenure;
    this.isPolyglot = isPolyglot;
    this.schoolCountry = "United States";
  }
}

// ? Create a new instance of an Instructor class

let paul = new Instructor("Paul", "Software Development", true, true);
console.log(paul);
console.log(typeof paul); // returns object
console.log(paul instanceof Instructor); // returns true
console.log(paul instanceof Object); // returns true
console.log(Instructor instanceof Object); // returns true

// ? Can use limited object methods on the instance
console.log(Object.keys(paul), Object.values(paul));

// ? Class Expressions

let House = class {
  constructor(address, bedrooms, bathrooms) {
    this.address = address;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
};

let $10070OrangeSt = new House("1007 Orange St", 3, 2);
console.log($10070OrangeSt);

class Noconstruct {
  //if no constructor, default constructor is used (creates an empty object)
}
