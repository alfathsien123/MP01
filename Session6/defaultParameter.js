// Default Parameter
// Parameter yang memiliki nilai awal yang akan digunakan jika tidak dapat menerima argument

// a dan b => Parameter
var x = (a, b) => {};
// 3 dan 5 => Argument
x = (3, 5);

var power = (num1, num2 = 2) => {
  var hasil = num1;
  for (i = 1; i < num2; i++) {
    hasil *= num1;
  }

  return [num1, num2, hasil];
};

var result = power(8);
console.log(`${result[0]} pangkat ${result[1]} adalah ${result[2]}`);

var addition = (a, b = 2, c) => {
  return [
    ["a", a],
    ["b", b],
    ["c", c],
  ];
};

console.log(addition(2, undefined, 3));
