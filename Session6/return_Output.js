// Return (Output)

// basic
var basic = () => {
  return 123;
};

var basic2 = () => {
  return "Im the boss";
};

// random 1-10

var ran = () => {
  var angkaRan = Math.random();
  var nol9 = angkaRan * 10;
  var nol10 = Math.floor(nol9) + 1;
  return nol10;
};

var result = ran();
console.log(result);
