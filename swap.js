// Function to swap two variables using a temporary variable
function swapWithTemp(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

// Function to swap two variables without using a temporary variable
function swapWithoutTemp(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

// Example usage
let x = parseInt(prompt("Enter 1st number"));
let y = parseInt(prompt("Enter 2nd number"));

console.log("Before swapping:");
console.log("x =", x);
console.log("y =", y);

[x, y] = swapWithTemp(x, y);

console.log("After swapping with temporary variable:");
console.log("x =", x);
console.log("y =", y);
