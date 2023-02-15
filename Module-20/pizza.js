function calculateChange(moneyGiven, costOfFruits) {
    return moneyGiven - costOfFruits;
  }
  
  let moneyGiven = parseFloat(prompt("Enter the amount of money Harry was given:"));
  let costOfOranges = parseFloat(prompt("Enter the cost of oranges:"));
  let costOfApples = parseFloat(prompt("Enter the cost of apples:"));
  
  let totalCost = costOfOranges + costOfApples;
  let change = calculateChange(moneyGiven, totalCost);
  
  console.log("The shopkeeper will return $" + change.toFixed(2) + " to Harry.");

  