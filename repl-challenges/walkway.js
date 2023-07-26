class Location {
  constructor(name, description, hasFood, beds) {
    this.name = name;
    this.description = description;
    this.hasFood = hasFood;
    this.beds = beds;
  }
}

let home = new Location("home", "Home sweet home", "no", 1);
let sidewalk = new Location("sidewalk", "out walking on the sidewalk", "no", 0);
let store = new Location(
  "store",
  "find something to buy, here at the store",
  "yes",
  0
);
let line = new Location(
  "line",
  "wow, this is a long line. I hope it's worth it.",
  "no",
  0
);
let foodtruck = new Location(
  "foodtruck",
  "looks like I could stop and get some fish and chips on the way back home",
  "yes",
  0
);
let locationCurrent = "home";

let locationLookUp = {
  home: "You are at your house.",
  sidewalk: "You are on the sidewalk.",
  store: "You are in the store.",
  foodtruck: "You are at the food truck window",
  line: "You are in line at the food truck",
};

let locationStates = {
  home: ["sidewalk"],
  sidewalk: ["home", "store", "line"],
  store: ["sidewalk"],
  line: ["foodtruck", "sidewalk"],
  foodtruck: ["sidewalk", "line"],
};

console.log("You are in your home and would like to go to the store.");
function moveLocation(newLocation) {
  if (locationStates[locationCurrent].includes(newLocation)) {
    locationCurrent = newLocation;
    console.log(locationLookUp[locationCurrent]);
  } else {
    console.log(`You cannot go from ${locationCurrent} to ${newLocation}`);
  }
}

moveLocation("sidewalk");
moveLocation("store");
moveLocation("home");
moveLocation("sidewalk");
moveLocation("line");
moveLocation("foodtruck");
moveLocation("sidewalk");
moveLocation("home");
moveLocation("park");
