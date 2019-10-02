// O(n) time, O(1) space
/**
 *
 * @param {array} numbers
 * @returns {number}
 */
function nonAdjacentMaxSum(numbers) {
  if (numbers.length < 2) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  let max = 0;
  let prevMax = 0;

  for (let i = 0; i < numbers.length; i++) {
    const temp = max;
    max = Math.max(max, prevMax + numbers[i]);
    prevMax = Math.max(temp)
  }

  return max;
}

console.log(nonAdjacentMaxSum([5, 5, 10, 100, 10, 5]) === 110);
console.log(nonAdjacentMaxSum([1, 2, 3]) === 4);
console.log(nonAdjacentMaxSum([1, 20, 3]) === 20);
console.log(nonAdjacentMaxSum([1]) === 1);
