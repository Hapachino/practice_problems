/**
 * prints integer in binary
 * @param {Number} integer
 */
function printBinary(integer) {
  const base = 2;
  const bits = [];

  while (integer) {
    bits.push(integer % base);

    integer = Math.floor(integer / base);
  }

  console.log(bits.reverse().join(''));
}

printBinary(12);
