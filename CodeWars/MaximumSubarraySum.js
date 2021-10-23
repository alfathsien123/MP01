var maxSequence = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// var maxSequence = function (arr) {
//   var hasil = maxSequence[0];
//   var hasil2 = maxSequence[0];

//   for (var x = 0; x < arr.length; x++) {
//     for (var y = 1; y < arr.length; y++) {
//      hasil += arr[y];
//     }
//     if ()
//   }
// };

function maxSum(arr) {
  let a1 = 0;
  let a2 = arr[0];
  arr.forEach((i) => {
    a1 = Math.max(i, a1 + i);
    a2 = Math.max(a2, a1);
  });
  return a2;
}
console.log(maxSum(maxSequence));
