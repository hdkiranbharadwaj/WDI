function fibonacciSequence(n) {
  let previous = 0;
  let current = 1;

  console.log("Fibonacci sequence up to", n, "terms:");

  for (let i = 0; i < n; i++) {
    console.log(previous);
    let next = previous + current;
    previous = current;
    current = next;
  }
}

// Get input from the user
const n = parseInt(prompt("Enter the number of terms for Fibonacci sequence:"));

// Print the Fibonacci sequence up to the nth term
fibonacciSequence(n);
