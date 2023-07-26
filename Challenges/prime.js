/* 
Challenge: Write a program that takes an array of numbers as an argument and checks if it is a prime number ( a positive integer greater than 1 that has no positive integer divisors other than 1 and itself). */

// Starter Code:
let numberList = [5, 8, 81, 15, 23, 379, 115, 127, 83, 64, 269];
let primeList = [];


// function that finds if the number is prime
function findPrime (testNumber) {
    // if statement, if prime add to prime list, else do nothing
    for (let i = 2; i < testNumber; i++) {
        if (testNumber % i == 0) {
            return false;
            break;
    }
}
return true
}

// loop to push prime numbers to prime list
for (let number of numberList) {
    if (findPrime(number) == true) {
        primeList.push(number);
    }
}
console.log(findPrime(379))
console.log(primeList);

// console.log(numberList[i]);
// trying to find if each number is prime, to do so you must see if the number is divisible by anything besides 