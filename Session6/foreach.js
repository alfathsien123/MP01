// direct argument
var addition = () => {
  return a + b;
};

// direct callback
var direct = (arr, cb) => {
  return cb(arr);
};

var num = [1, 2, 3];

/*
var lenFn = (ary) => {
  return ary.length;
};
*/

var result = direct(num, (ary) => {
  return ary.length;
});
console.log(result);

//////////////
// for each //
//////////////

// For each : loop
var num = [1, 2, 3];
var cb = (val) => {
  console.log(`Loop ${val}`);
};

num.forEach(cb);

// Direct
num.forEach((val) => {
  console.log(`Loop Direct ${val}`);
});

// For each : value on index
var num = [1, 2, 3];
// Value akan masuk ke parameter ke-1, Index akan masuk ke-2
var cb = (val, idx) => {
  console.log(`Index ke ${idx} : ${val}`);
};

num.forEach(cb);
num.forEach((val, idx) => {
  console.log(`Direct index ke ${idx} : ${val}`);
});

// For each : third argument
var days = ["Sunday", "Monday", "Tuesday"];
days.forEach((val, idx, arr) => {
  console.log(`Value: ${val}`);
  console.log(`Index: ${idx}`);
  console.log(`Array: ${arr}`);
});

// For each : multiple by two
var num = [3, 5, 7];
var result = [];

num.forEach((val) => {
  result.push(val * 2);
});

console.log(result);

// For each : highest and lowest
var num = [5, 27, 33, 22, 3];
var min, max;

num.forEach((val, idx) => {
  if (idx == 0) {
    min = max = val;
  } else if (val < min) {
    min = val;
  } else if (val > max) {
    max = val;
  }
});

console.log(`Min: ${min}\nMax: ${max}`);

// For each : Genap ganjil
var num = [123, 214, 12, 213, 53, 122, 66, 345, 76, 543];
var oddEven = (arr) => {
  var odd = [];
  var even = [];
  arr.forEach((val) => {
    if (val % 2 == 0) {
      even.push(val);
    } else {
      odd.push(val);
    }
  });
  return [odd, even];
  //   console.log(`Ganjil: ${odd}\nGenap: ${even}`);
};
var result = oddEven(num);
console.log(result);
console.table(result);
// console.log(oddEven(num));
