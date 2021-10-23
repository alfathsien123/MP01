var x = "world";
function solution(str) {
  var a = str.split("");
  var b = a.reverse();
  var c = b.join("");
  return c;
}

console.log(solution(x));
