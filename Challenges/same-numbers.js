/* write a function that creates an array of 5 different whole numbers.
 Use the range 1-6 so your end result should be something like [6, 4, 1, 2, 3] 
 Hint: earlier in class we had functionality to check if items were the same
 need to generate random numbers between 1 and 6 and only add them to the array if they aren't already in there.
 */
var numArray = []
 function createNumArray () {
    while (numArray.length < 5) {
        let arrayNumbers = 0
        arrayNumbers = Math.floor(Math.random()*6);
        if (numArray.includes(arrayNumbers)) {
        } else {  
            numArray.push(arrayNumbers)
        }
    }
 }
createNumArray ()
console.log(numArray);
