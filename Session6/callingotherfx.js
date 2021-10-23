// Calling other function
// sebuah function dapat memanggil function lain secara langsung

var first = () => {
  console.log("First");
};
var second = () => {
  console.log("Second");
};

second();

var add = (num1, num2) => {
  return num1 + num2;
};

var sub = (num1, num2) => {
  return num1 / num2;
};

var mul = (num1, num2) => {
  return num1 * num2;
};

var calculator = (num1, num2, cb) => {
  return cb(num1, num2);
};
console.log(calculator(7, 2, mul));

var calculator2 = (num1, num2, cb) => {
  if (cb == "sub") {
    return sub(num1, num2); // calling other function
  } else if (cb == "add") {
    return add(num1, num2); // calling other function
  } else {
    return mul(num1, num2); // calling other function
  }
};
console.log(calculator2(8, 2, "add"));
