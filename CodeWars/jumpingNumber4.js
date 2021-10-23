const num = 134;

function jumpingNumber(n) {
  var array = n.toString();
  var split = array.split("");
  for (var i = split.length - 1; i >= 1; i--) {
    if (Math.abs(split[i] - split[i - 1]) == 1) {
    } else return "Not!!";
  }
  return "Jumping!!";
}

console.log(jumpingNumber(num));
