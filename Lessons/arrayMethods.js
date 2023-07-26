// ? How do I add things to an existing array?
const fruits = ["apples", "banana"];
fruits.push("orange")
console.log(fruits);
let lastFruit = fruits.pop()
console.log(fruits);
/* 
push() = Add an element to the end of the array
pop () = Removes the last element of the array
*/

// ? How to add two arrays together (concatonation with strings)
const arr1 = [1,2]
const arr2 = [3,4]
const combinedarr = arr1.concat(arr2)
console.log(combinedarr);
/* 
concat() = merges two or more arrays into a single array
*/

const colors = ["red", "green", "blue", "yellow"]
const slicedColors = colors.slice(1,3)
console.log(slicedColors);
console.log(colors);
console.table(colors)
/* 
slice() = extract a portion of the array into a new array (doesn't modify the original array) (copies, not takes)
*/

let words = "I really have been enjoying this coding camp.";
let splitWords = words.split(" ");
console.log(splitWords);

let stringNumbers = "15,20,25,18";
let numArr = stringNumbers.split(",");
console.log(numArr);
// split () = will take a string and convert it to an array based on what you supplied in the parenthesis. (ex: " " splits strings by spaces)

let wordJoin = splitWords.join(" "); // what is in the parenthesis is what is between the array points.
console.log(wordJoin);

let numArr2 = [12,25,2012]
let numJoin = numArr2.join("/")
console.log(numJoin);

// Join () = will convert array to string, joining them together

let reverseExampleArr = [1,2,3,4,5]
console.log(reverseExampleArr.reverse());

// reverse () = reverses the order of an array

let zipcodes = [46140, 48218, 90210, 87412]
const isValidZipcode = zipcodes.includes(46140)
console.log(isValidZipcode);

// includes() = will check the array if there is a match and will return true if it finds a match.

console.log(zipcodes.indexOf(98989));

// indexOf() will return the index position that it found the match. if not found returns a -1

// ! advance array methods

// ? .forEach() fires a callback function on each element of your array
// callback has three parameters: Value - the iterable, index - of the iterable, and array - the original array .forEach was called upon
// ! does NOT return anything unless specified
let todoItems = ["get milk x", "contact lens solution x", "chicken"]

todoItems.forEach(item => item.includes("x") ? console.log(item) : null)


let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachusetts",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesota",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

states.forEach((state,index,array) => {
    console.log(`state: ${state} - Index: ${index}`);
})

/* 
? .filter()
Creates a new array based on a filter function
only filtered items can be added to an array
Cannot have (if/else) where else also gets added
filter RETURNS values
*/
// Could be used to find if a user exists on a database

let startsWithC = states.filter(state => state.startsWith("C"))
console.log(startsWithC);

// ! quick Challenge - filter out grades under 60
let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89]
let failingGrades = grades.filter(grade => grade < 60)
console.log(failingGrades);

/* 
? .map()
creates an array with elements resulting from a callback function
*/

let statesUpperCase = states.map(state => state.toUpperCase)
console.log(statesUpperCase);

// ! Quick Challenge - raise everyone's grade by 15 points if not above 90

// let gradeCurve = grades.map(grade => {
//     if (grade > 90){
//         return grade
//     } else {
//         return grade + 15
//     }
// })
// console.log(gradeCurve);
// or

let updatedGrade = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(updatedGrade);

