var num = [1, 3, 5, 6, 6, 7, 7, 5];

function repeats(arr) {
  var hasil = [];
  for (var j = 0; j < arr.length; j++) {
    if (hasil.indexOf(arr[j]) < 0) {
      hasil.push(arr[j]);
    } else hasil.splice(hasil.indexOf(arr[j]), 1);
  }
  var hasil2 = 0;
  hasil.forEach((val) => {
    hasil2 += val;
  });
  return hasil2;
}

console.log(repeats(num));
