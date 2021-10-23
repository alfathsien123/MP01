var number = 1652;

function narcissistic(value) {
  var number = value;
  var toSplit = value.toString().split("");
  var num = 0;
  for (var i = toSplit.length - 1; i >= 0; i--) {
    num += Math.pow(+toSplit[i], toSplit.length);
  }
  if (num == number) return true;
  else return false;
}

console.log(narcissistic(number));
