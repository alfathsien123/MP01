var addition = (num1, num2) => {
  return num1 + num2;
};

var multiplication = (num1, num2) => {
  return num1 * num2;
};

// calculator
var calculator = (a, b, cd) => {
  return cd(a, b);
};

var result = calculator(5, 2, multiplication);

console.log(result);

// array calculator
var num = [5, 7, 9];
var arrCalculator = (arr, operand, cd) => {
  var arrResult = [];
  var operationResult;
  for (i = 0; i < arr.length; i++) {
    operationResult = cd(arr[i], operand);
    arrResult.push(operationResult);
  }
  return arrResult;
};

console.log(arrCalculator(num, 5, multiplication)); // function multiplication dijadikan parameter untuk function arrCalculator
