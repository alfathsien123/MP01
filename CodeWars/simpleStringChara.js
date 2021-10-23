var x = ".12;3'123ABc";

function solve(s) {
  var lower = s.replace(/[^a-z]/g, "");
  var upper = s.replace(/[^A-Z]/g, "");
  var num = s.replace(/[^0-9]/g, "");
  var special = s.replace(/[a-zA-Z0-9]/g, "");
  const arr = [];
  arr.push(upper.split("").length);
  arr.push(lower.split("").length);
  arr.push(num.split("").length);
  arr.push(special.split("").length);
  return arr;
}

console.log(solve(x));
