var number = 32123;

// function sumDigits(number) {
//   var abs = Math.abs(number);
//   var str = abs.toString();
//   var split = str.split("");
//   var value = 0;
//   for (var i = split.length - 1; i >= 0; i--) {
//     value += parseInt(split[i]);
//   }
//   return value;
// }

function sumDigits(number) {
  var toSplit = Math.abs(number).toString().split("");
  var value = 0;
  for (var i = toSplit.length - 1; i >= 0; i--) {
    value += parseInt(toSplit[i]);
  }
  return value;
}
console.log(sumDigits(number));

// function sumDigits(number) {
//   return Math.abs(number)
//     .toString()
//     .split("")
//     .reduce(function (a, b) {
//       return +a + +b;
//     }, 0);
// }
