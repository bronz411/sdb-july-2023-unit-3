/* 
Challenge:
Create a loop that will go through the numbers array and store the highest value.
You will then console log that value at the end of your loop.
*/

const numbers = [10, 5, 8, 20, 3];
let highestNumber = 0;

for (i = 0; i < numbers.length; i++) {
    if (highestNumber < numbers[i]) {
        highestNumber = numbers[i]
    }
}
console.log(highestNumber);

