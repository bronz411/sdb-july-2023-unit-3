var series = [0, 1]; // change the first two numbers to start at a different point (final going further)
function fibNumberToCalc(fibNumber) {
  while (series.length < fibNumber) {
    let firstNum = series.pop(); // 1
    let secondNum = series.pop(); // 0
    let sum = firstNum + secondNum; // 1 = 1 + 0
    series.push(secondNum); // 0
    series.push(firstNum); // 1
    series.push(sum); // 1
  }
}
fibNumberToCalc(10);
console.log(series.join(", "));
// Print the Fibonacci sequence to the console
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
