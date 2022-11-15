//Operators

meal_cost = 12.0;
tip_percent = 20;
tax_percent = 8;

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  let tip = (meal_cost / 100) * tip_percent;
  let tax = (tax_percent / 100) * meal_cost;
  let total_cost = Math.round(meal_cost + tip + tax);
  return total_cost;
}

console.log(solve(meal_cost, tip_percent, tax_percent));
