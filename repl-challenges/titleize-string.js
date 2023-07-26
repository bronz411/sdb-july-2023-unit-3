// Example string you can start with
let myString = "the rain in spain falls MAINLY on the PLAIN";
// myString = user input for final going further.
// Your Code Goes Here
function capitalize(string) {
  let firstLetter = string[0];
  firstLetter = firstLetter.toUpperCase();
  let restOfWord = string.slice(1).toLowerCase();
  let fullWord = firstLetter + restOfWord;
  return fullWord;
}
/*
alternatively 
 function capitalize(str) {
 return str[0].toUpperCase() + str.slice(1).toLowerCase
 }
*/

function titleize(string) {
  return string
    .split(" ")
    .map((words) => capitalize(words))
    .join(" ");
  // let capitalizedString = string.map (words => capitalize(words))
  // let titleString = capitalizedString.join(" ")
}
titleize(myString);
// Should print: 'The Rain In Spain Falls Mainly On The Plain'

function onlyFirstCap(string) {
  let arrayMod = [];
  let firstWord = [];
  let combinedPhrase = [];
  string = string.split(" ");
  firstWord = string.slice(0, 1).map((words) => capitalize(words));
  arrayMod = string.slice(1).map((words) => words.toLowerCase());
  combinedPhrase = firstWord.concat(arrayMod).join(" ");
  return combinedPhrase;
}
onlyFirstCap(myString);

const { resolve } = require("dns");

// entering their own phrase section
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q) => {
  return new Promise((resolve, reject) => {
    rl.question(q, resolve);
  });
};

async function start() {
  let value = await ask("please enter many words");
  console.log(titleize(value));
}
start();
