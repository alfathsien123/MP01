function findMultiples(integer, limit) {
  let hasil = [];
  var x = 0;
  while (x < limit) {
    x = x + integer;
    if (x > limit) {
      return hasil;
    }
    hasil.push(x);
  }
  return hasil;
}

console.log(findMultiples(1, 2));
