/**
 * Return number of one's in an integer's binary representation
 * @param {Number} integer
 */
function numberOfOneBits(integer) {
  const bits = [0];

  for (let i = 1; i <= integer; i++) {
    bits[i] = bits[i & i - 1] + 1;
  }

  return bits[integer];
}

const bits = [
  0,
  1,
  1,
  2,
  1,
  2,
  2,
  3,
  1,
  2,
  2,
];

for (let i = 0; i < bits.length; i++) {
  console.log(numberOfOneBits(i) === bits[i]);
}
