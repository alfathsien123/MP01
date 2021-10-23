var A = [1, 1, -2];

function findOdd(A) {
  var hitung = 0;
  var arr = A.sort();
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        hitung++;
      }
    }
    if (hitung % 2 == 1) {
      return arr[i];
    }
  }
}

console.log(findOdd(A));

// function findOdd(A) {
//   let count = 0;
//   let arr = A.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       return arr[i];
//     }
//   }
// }

// console.log(findOdd(A));
