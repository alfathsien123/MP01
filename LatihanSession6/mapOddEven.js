const numbers = [22, 17, 19, 20, 14];
const numResult = numbers.map((number) => {
  if (number % 2 == 1) {
    return "Odd";
  } else return "Even";
});

console.log(numResult);
