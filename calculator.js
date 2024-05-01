// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero!";
  }
  return num1 / num2;
}

// Main function to perform calculator operations
function calculator(operation, num1, num2) {
  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      return "Invalid operation!";
  }
}

// Get input from the user
const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));
const operation = prompt(
  "Enter the operation (add, subtract, multiply, divide):"
).toLowerCase();

// Perform calculation
const result = calculator(operation, num1, num2);

// Display result
alert(`Result: ${result}`);
