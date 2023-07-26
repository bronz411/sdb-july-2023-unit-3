// Given array, write a for of loop that demonstrates how many times "red" occurs.
// try to make dynamic.

const colors = ['red', 'blue', 'green', 'red', 'yellow', 'red'];
let totalOccurances = 0

for (const color of colors){
    if (color == 'blue') {
        totalOccurances++
    }
}
console.log (`There are ${totalOccurances} of the chosen color`)