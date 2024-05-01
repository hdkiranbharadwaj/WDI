function countNumbersInArray(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  return {
    positive: positiveCount,
    negative: negativeCount,
    zero: zeroCount,
  };
}

// Example usage
const numbers = [-2, -1, 0, 1, 2, 3, 0, -4, 5];
const counts = countNumbersInArray(numbers);

console.log("Counts in the array:", numbers);
console.log("Positive numbers:", counts.positive);
console.log("Negative numbers:", counts.negative);
console.log("Zero numbers:", counts.zero);
