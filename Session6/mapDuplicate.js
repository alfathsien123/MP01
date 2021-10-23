// Map Duplicate

// map duplicat : for loop
var mapForLoop = (arr, cb) => {
  var arrMap = [];
  for (i = 0; i < arr.length; i++) {
    arrMap.push(cb(arr[i]));
  }

  return arrMap;
};

var num = [1, 2, 3];
var multi = (number) => {
  return number * 2;
};

var forLoopResult = mapForLoop(num, multi);
console.log(forLoopResult);

var mapResult = num.map(multi);
console.log(mapResult);

// map duplicate : for each
var mapForEach = (arr, cb) => {
  var arrMap = [];
  arr.forEach((val) => {
    arrMap.push(cb(val));
  });
  return arrMap;
};

var forEachResult = mapForEach(num, multi);
console.log(forEachResult);
