/* 
? Object
*containers for values in javascript object notation format (JSON)
*exists as a string
*denoted by {}
*not indexable
*comma separated key-value pairs || properties: values
* has properties and methods
    *.property (ex: .length)
    * .method() (ex: .toUpperCase())
    * has .this keyword
Functions as a sort of blueprint (like for a username/ID needs userID, name, email,  password, etc.)
*/

let obj = {}
console.log(obj);
console.log(typeof obj);
console.log(obj instanceof Object);

let student = new Object({
    // property: value
    // key: value
    name: "Brent",
    age: 22,
    isTeacher: false,
    cohort: "sbd-july-23"
})

console.log(student);

let bentley = {
    species: "dog",
    color: "cow",
    breed: "olde english bulldog",
    weight: 78,
    favoriteActivity: ["Farting", "Fetching", "sleeping"]
}
console.log(bentley);

// ? Accessing properties and values
// ? Access using dot notation (member access operator)
// ? undefined properties do not throw errors when called

console.log(bentley.weight);

//? Access using keys
console.log(bentley["breed"]);

//  ? Viewing object keys and values (allows arrays and array methods.)

console.log(Object.keys(bentley)[0]);
console.log(Object.values);


// using a function to create an object. Prototype constructor function
// ! extra way further on material
function Dog(name, color, favActivity) {
    this.name = name
    this.color = color
    this.favActivity = favActivity
}

console.log(new Dog("Brutus", "black", "jumping"));

// ! QuickChallenge - how would you iterate (console.log) over bentley's activities?
console.log(bentley.favoriteActivity);
bentley.favoriteActivity.forEach(act => console.log(act))

// ? Adding properties and values

let car = {
    make: "BMW",
    model: "M5",
    mileage: 27344
}
console.log(car);
// using dots
car.chassis = "F10"
// using brackets
car["VIN"] = "WMW2093423946r72308423"

//? deleting values

delete car.make

// ? reassigning values

car.model = "z4 M"
console.log(car);

console.log('-------------------------------------------------------');

let incoming = {
    headers: ["makeshift"],
    body: {
        email: "brentbrown@gmail.com",
        password: "password"
    }
}

let db = [
    { email: "paul@uprighted.com", password: "dblocal" },
    { email: "mbaum@msn.com", password: "potato3" },
    { email: "alex@aol.com", password: "imcool123" },
    { email: "marypotato@altavista.com", password: "imnotpayingatt3ntion" },
]

const login = (request) => {
    // TODO: extrapolate the data out of request
    // TODO: iterate over database
    // TODO: check if .email from request matches .email from db
    // TODO: if .email matches, verify if passwords match
    // TODO: if not return incorrect password
    const body = request.body
    const foundUser = db.filter(usr => usr.email === body.email)
    if (foundUser.length === 0) {
        console.log("User now found");
    } else {
// ternary function on multiple lines
        foundUser[0].password === body.password
            ? console.log("User logged in")
            : console.log("Incorrect  password");
    }
}

login(incoming)