/* 
 ?state machines
*/

// ? Lookup Table

function getPoemTitle(author) {
  let poems = {
    "Robert Frost": "Stopping by woods on a Snowy Evening",
    "Shel Silverstein": "Falling Up",
    "Sylvia Plath": ["The Bell Jar", "Dig it Up Again", "First Loves"],
  };
  return poems[author]; // creates the key
}

console.log(getPoemTitle("Sylvia Plath"));

let switchState = {
  on: ["off"], // if on can only switch to off
  off: ["on"], // if off can only switch to on
};

let lightSwitch = "on";

function modifyLightState(newState) {
  let transitions = switchState[lightSwitch];
  if (transitions.includes(newState)) {
    lightSwitch = newState;
  } else {
    throw new Error(
      `Invalid state transformation from ${lightSwitch} to ${newState}`
    );
  }
}
modifyLightState("off");
console.log(lightSwitch);

let trafficLight = {
  red: ["green", "yield"],
  yellow: ["red"],
  green: ["yellow"],
  yield: ["red"],
};

let currentTrafficLightColor = "green";

function modifyTrafficLightState(newState) {
  // assigns values of state property matching current state
  let transitions = trafficLight[currentTrafficLightColor];
  // verify if new state is a valid transition
  if (transitions.includes(newState)) {
    // change the state
    currentTrafficLightColor = newState;
    console.log(currentTrafficLightColor);
  } else {
    // throw error if transition is impossible
    throw new Error(
      `Invalid state transformation from ${currentTrafficLightColor} to ${newState}`
    );
  }
}

modifyTrafficLightState("red");
// when using functions to change the current item based on the states you can make premade choices like the following

//"w": ["crumbled bridge"], "n" ["cracked bridge"], etc.