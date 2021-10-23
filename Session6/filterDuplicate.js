var filterForLoop = (arr, cb) => {
  var arrLoop = [];
  for (i = 0; i < arr.length; i++) {
    var isTrue = cb(arr[i]);
    if (isTrue) {
      arrLoop.push(arr[i]);
    }
  }
  return arrLoop;
};
var numbers = [11, 24, 35, 43, 67, 23, 66, 92];
var odd = (val) => {
  return val % 2 == 1;
};

var forLoopResult = filterForLoop(numbers, odd);
console.log(forLoopResult);
