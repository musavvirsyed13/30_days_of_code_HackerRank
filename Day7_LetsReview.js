//Lets review loops in string

n = "Hacker";
function processData(n) {
  //Enter your code here
  let even = "",
    odd = "";
  for (let i = 0; i < n.length; i++) {
    if (i % 2 === 0) {
      even += n[i];
    } else if (i % 2 === 1) {
      odd += n[i];
    }
  }
  return console.log(even + " " + odd);
}
processData(n);
