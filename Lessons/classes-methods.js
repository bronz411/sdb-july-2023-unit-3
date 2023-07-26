/* 
? Class Methods
*method is a function that lives inside of a class (or object)
* can be used on any class instance
*/

class Car {
  constructor(make, model, year, transmission) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
  }
  start() {
    return `${this.make} started it's engine.`;
  }
}

let maserati = new Car("Maserati", "Gran Turismo", 2015, "auto");
let porsche = new Car("Porsche", "911", 2022, "PDK");

console.log(maserati.start());
console.log(porsche.start());

/* 
? Inheritance
* extends a parent class with a child class
* Child class still has access to parent's properties and methods
*/

class CarsForSale extends Car {
  constructor(make, model, year, transmission, mileage, price) {
    // super allows access to properties and methods of a parent class
    super(make, model, year, transmission);
    this.mileage = mileage;
    this.price = price;
    this.dealer = "Paul's Cars";
  }
  isCPO(currentYear) {
    return (currentYear =
      this.year >= 6
        ? `Your ${this.model} is out of warranty`
        : `Your warranty is stil active`);
  }
}

let bmw = new CarsForSale("BMW", "M3", 2008, "manual", 27000, 50000);
console.log(bmw);
console.log(bmw.start());

/* 
? Factory Functions
* functions that accept data and return new instance of a class
* these functions are for data that is being passed in that is different. doesn't make a child, but modifies data to fit the current class before passing it through the class.
*/

class Circle {
  constructor(radius) {
    if (typeof radius === "number") {
      this.radius = radius;
    } else {
      throw new Error("Radius must be a number");
    }
  }
  static createCircleUsingDiameter(diameter) {
    return new Circle(diameter / 2);
  }
  circumference() {
    return 2 * Math.PI * this.radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}
let myCircle = new Circle(17);
console.log(myCircle);

//Generating new circle using diameter
console.log("LOOK HERE", Circle.createCircleUsingDiameter(20));

function circleFromDiameter(diameter) {
  return new Circle(diameter / 2);
}

let myDiameterCircle = circleFromDiameter(25);
console.log(myDiameterCircle);

/* 
? Static Factory Methods
* do not require instantiation with "new" operator
* create an instance of our class through its method
*/

class CircleStaticFactoryEx {
  static createCircleUsingDiameter(diameter) {
    return new CircleStaticFactoryEx(diameter / 2);
  }
  constructor(radius) {
    if (typeof radius === "number") {
      this.radius = radius;
    } else {
      throw new Error("Radius must be a number");
    }
  }
}

let diaCircle = CircleStaticFactoryEx.createCircleUsingDiameter(20);
console.log(diaCircle);
