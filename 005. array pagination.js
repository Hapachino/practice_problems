// Paginate an array

class Pagination {
  constructor(array) {
    this.array = array;
  }

  paginate(page = 0, pageSize = 5) {
    return this.array.slice(page * pageSize, (page + 1) * pageSize);
  }
}

const array = Array(22).fill().map((_, i) => i + 1);
const pagination = new Pagination(array);
const page1 = pagination.paginate(2);
console.log(page1)
