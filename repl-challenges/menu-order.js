let menu = {
  burger: 7.99,
  hotDog: 6.99,
  salad: 40,
  scotchegg: 12,

  order(orderPlaced) {
    let sum = 0;
    let orderSplit = orderPlaced.split(" ");
    for (foodRequested of orderSplit) {
      foodRequested = foodRequested.toLowerCase();
      if (menu.hasOwnProperty(foodRequested)) {
        sum = sum + menu[foodRequested];
      } else {
        console.log(`Sorry, ${foodRequested} is not on the menu.`);
      }
    }
    console.log(sum.toFixed(2));
  },
};

menu.order("salad scotchegg fries");

/*   order function can also be done like so:
  order(orderPlaced) {
  let orderSplit = orderPlaced.split(", ")
  let sum = 0
  orderSplit.forEach(i =>{ !this[i] ? console.log(`${i} is not on the menu`): sum += this[i]
  })
  console.log(sum)
  }
  
  */
