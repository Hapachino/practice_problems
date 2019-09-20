function removeDuplicatesFromArray(array) {
  const values = new Map();

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];

    if (values.get(currentValue)) {
      array.splice(i, 1);

      i--;
    } else {
      values.set(currentValue, true);
    }
  }

  return array;
}

console.log('test cased passed :',
  areArraysEqual(
    removeDuplicatesFromArray([1, 2, 5, 1, 7, 2, 4, 2]),
    [1, 2, 5, 7, 4]
  )
);

function areArraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
