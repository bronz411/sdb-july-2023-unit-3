class Cake {
  //default values within the constructor for missing arguments
  constructor(flavor = "plain", icing = "no", decoration = "disapointment") {
    this.flavor = flavor;
    this.icing = icing;
    this.decoration = decoration;
    this.size = 12;
  }
  //function section
  describe() {
    console.log(
      `This ${this.flavor} cake is topped with a ${this.icing} icing and covered with ${this.decoration}.`
    );
  }
  eat(slice) {
    console.log(`I would like ${slice} slice/slices of ${this.flavor} please.`);
    this.size -= slice;
  }
}

let chocolateCake = new Cake("chocolate", "caramel", "sprinkles");
let vanilaCake = new Cake("vanilla", "cream cheese", "strawberries");
let tresLechesCake = new Cake(
  "Tres Leches",
  "coffee and chocolate ganache",
  "pure chocolate shavings"
);
// wow this cake actually sounds fantastic
let fakeCake = new Cake();

chocolateCake.describe();
vanilaCake.describe();
tresLechesCake.describe();
fakeCake.describe();
chocolateCake.eat(3);
vanilaCake.eat(2);
tresLechesCake.eat(40);
// Should print:
// 'It is a chocolate cake, with caramel frosting, and sprinkles'
