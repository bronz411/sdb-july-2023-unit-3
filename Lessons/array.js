/* 
ARRAYS
Arraays are objects that have the following characteristics. (is a  datatype of itself)
- arrays are resizable and can be a combination or mix of multiple tata types.
- arrays are indexed at 0 (starting data is at position 0)
- Example Data Types: strings, boolean, numbers, arrays, functions, and objects

*/

//  ? How do we create arrays
// use brackets to begin and end the array
const names = ["George", "John", "Thomas"]; // <--- preferred way of creating 
console.log("names", names);

// Constructor method of arrays, is created based on the keyword new and using the  array constructor
const namesArrayConstructor = new Array ("George", "John", "Thomas");
console.log("names", namesArrayConstructor);
// have a single string and convert the string to array using a comma
const namesStringToArray = "George, John, Thomas".split(",");
console.log("names", namesStringToArray);


// ? What does it mean to have indexes?
//                  0           1          2
let cityArray = ["Houston", "Tampa", "Atlanta"];
// How do I reference Tampa?
console.log("cityArray", cityArray[1]);
// How do I reference Houston?
console.log("cityArray", cityArray[0]);

// How can I get the "SIZE" of the array?
console.log("cityarray length", cityArray.length);

//  Looping through arrays
for(let i=0; i < cityArray.length ; i++){
    console.log(cityArray[i]);  
}

// ? Create a variable called greetingNames
// ? Assign 4 names to the array
// ? Create a loop that will go through the array and display a greeting.
// ? "Bill, I hope you are having a good monday"
const greetingNames = ["Bill", "Ted", "Bonnie", "Clyde"]

for (let i = 0; i < greetingNames.length; i++) {
    console.log(`${greetingNames[i]}, I hope you are having a wonderful Monday!`);
}

let myShoppingCart = [14.99, 5.99, 1.50];
let total = 0
for (let i = 0; i<myShoppingCart.length; i++) {
    total = total + myShoppingCart[i];
    console.log(total);
}

console.log("Final Total", total);

// ! challenge: use the given array to loop through the bowler scores and average the scores.

let bowler1 = [298, 155, 178]
let totalScore = 0
let scoreAverage = 0
for (i = 0; i < bowler1.length; i++) {
    totalScore = totalScore + bowler1[i];
}
scoreAverage = totalScore / (bowler1.length)
console.log(scoreAverage);

// Arrays can have different data types in the array
//                                     0  1   2
let mixedArray = ["Spider", 65, true, [23,15,10]];

// ? How do I access true?
console.log("mixed arraay", mixedArray[2]);

// ? How do I access 15
console.log(mixedArray[3][1]);

// ! For OF Loop
// Used to condense your code:

const fruits = ['apple', 'banana', 'orange', 'grape'];
// singular version of your array name. array names are usually plural.
for(const fruit of fruits) {
    console.log(fruit);
}

// ! Convert a for loop to a for OF Loop

let bowler3scores = [298,155,178];
let scoreAverage3 = 0;

for (const bowler3score of bowler3scores) {
    scoreAverage3 = scoreAverage3 + bowler3score / bowler3scores.length;
}
console.log(Math.round(scoreAverage3));