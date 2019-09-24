// O(n) time, O(n) space
function doesZeroSumExist(numbers) {
  let sum = 0;
  const sums = { 0: 1 };

  for (let number of numbers) {
    sum += number;
    const compliment = 0 - sum;

    if (sums[compliment]) {
      return true;
    }

    sums[compliment] = true;
  }

  return false;
}

// Input: {4, 2, -3, 1, 6}
// Output: true
// There is a subarray with zero sum from index 1 to 3.

// Input: {4, 2, 0, 1, 6}
// Output: true
// There is a subarray with zero sum from index 2 to 2.

// Input: {-3, 2, 3, 1, 6}
// Output: false
// There is no subarray with zero sum.

console.log(doesZeroSumExist([4, 2, -3, 1, 6]) === true);
console.log(doesZeroSumExist([4, 2, 0, 1, 6]) === true);
console.log(doesZeroSumExist([-3, 2, 3, 1, 6]) === false);
