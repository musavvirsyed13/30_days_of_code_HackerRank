function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  // Declare second integer, double, and String variables.
  let int;
  let double;
  let str;
  // Read and save an integer, double, and String to your variables.
  int = Number(input_stdin_array[0]);
  double = Number(input_stdin_array[1]);
  str = input_stdin_array[2];
  // Print the sum of both integer variables on a new line.
  console.log(int + i);
  // Print the sum of the double variables on a new line.
  console.log((double + d).toFixed(1));
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + str);
}
