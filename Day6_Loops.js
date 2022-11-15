//Loops tables of 3

n = 3;

function tables(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

console.log(tables(n));
