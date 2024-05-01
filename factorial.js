function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// Get input from the user
const number = parseInt(prompt("Enter a number to find its factorial:"));

// Calculate factorial
const result = factorial(number);

// Print the result
console.log("The factorial of", number, "is:", result);
