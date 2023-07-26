let grades = {
  midterm: { grade: 3.3, weight: 1 },
  project: { grade: 4.0, weight: 1 },
  final: { grade: 3.2, weight: 2 },
};
// as far as I'm aware for the going forward you can simply make a new grades object and call gpa with that argument, or change the values in the current grades object.

function gpa(someGrades) {
  let gradesToWeight = Object.keys(someGrades);
  let weightSum = 0;
  let gradeSum = 0;
  // could also be done with: let weightSum = 0, weightSum = 0
  gradesToWeight.forEach((key) => {
    // somegrades.key doesn't work because key doesn't exist in the grades object. key in sqauare brackets takes the iterator we defined in forEach
    gradeSum = gradeSum + someGrades[key].grade * someGrades[key].weight;
    // the above could also be gradeSum += somegrades.... which applies the change to the gradeSum
    weightSum = weightSum + someGrades[key].weight;
  });
  let weightedGrade = gradeSum / weightSum;
  return weightedGrade;
}

console.log("The final GPA is " + gpa(grades));
// should print: 'The final GPA is 3.425'

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
  grades.midterm.grade = await ask("what is your midterm grade?");
  grades.project.grade = await ask("What is your project grade?");
  grades.final.grade = await ask("what is your final grade?");
  console.log(gpa(grades));
}

start();
