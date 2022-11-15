//Intro to Conditional Statements

n = 3;

function main(n) {
  var N = parseInt(readLine());
  if (n % 2 === 0) {
    if (n >= 2 && n <= 5) {
      console.log("Not Weird");
    } else if (n >= 6 && n <= 20) {
      console.log("Weird");
    } else if (n > 20) {
      console.log("Not Weird");
    }
  } else if (n % 2 === 1) {
    console.log("Weird");
  }
}

main(n);
