const arrays = [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []];
// print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
// Implement an iterator that supports hasNext(), next() and remove() methods.

function getArraysIterator(arrays) {
  let i = 0;
  let j = 0;
  let prevI = null;
  let prevJ = null;

  return {
    next() {
      let value;

      while (i < arrays.length) {
        const array = arrays[i];

        while (j < array.length) {
          value = array[j];
          prevI = i;
          prevJ = j;

          j++;

          break;
        }

        if (value) {
          break;
        }

        if (j === array.length) {
          j = 0;
        }

        i++;
      }

      return value
        ? { value, done: false }
        : { done: true };
    },
    hasNext() {
      const currentI = i;
      const currentJ = j;

      const { done } = this.next();

      i = currentI;
      j = currentJ;

      return !done;
    },
    remove() {
      arrays[prevI].splice(prevJ, 1);
      j--;

      console.log(arrays);
    }
  };
}

const iterator = getArraysIterator(arrays);

iterator.next();
iterator.remove();
iterator.next();
iterator.remove();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
