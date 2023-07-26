// ? Array Reverse
// ? Reverse an array
// ? you will have an incoming array ( the one to reverse), the reversed array (the one we move items into)
// ! .reverse() is not allowed 


let cars = ["porsche", "BMW", "Maserati", "Spyker"]

/* function reverseArray (cars) {
        let firstCar = cars.pop();
        let secondCar = cars.pop();
        let thirdCar = cars.pop();
        let fourthCar = cars.pop();
        cars.push(firstCar);
        cars.push(secondCar);
        cars.push(thirdCar);
        cars.push(fourthCar);
}
reverseArray(cars)
console.log(cars); */

let reversedCars = []
/* for (i = 0; i < cars.length; i++) {
    let transCar = cars.pop()
    reversedCars.push(transCar)
}
 */

// with push
for ( i = cars.length - 1; i >= 0; i -=0) {
    reversedCars.push(cars[i])
}
console.log(reversedCars);

// without push

/* for ( i = cars.length - 1; i >= 0; i -= 0) {
    reversedCars[reversedCars.length] = cars[i]
}

console.log("original", cars, "Reversed", reversedCars); */