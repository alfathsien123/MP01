var number = [1, 2, 3];
var arrCalculator = (arr, operation, operand) => {
  var arrResult = [];
  switch (operation) {
    case "Addition": {
      for (i = 0; i < arr.length; i++) {
        arrResult.push(arr[i] + operand);
      }
    }

    case "Multiplication":
      {
        for (i = 0; i < arr.length; i++) {
          arrResult.push(arr[i] * operand);
        }
      }

      console.log(`Before : ${number}\nAfter : ${arrResult}`);
      break;
    default:
      // else-nya switch-case
      console.log("Invalid Operation");
  }
};

arrCalculator(number, "123", 11);
