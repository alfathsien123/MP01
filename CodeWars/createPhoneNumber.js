var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//=> returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  var kurung = `${numbers[0]}${numbers[1]}${numbers[2]}`;

  var tiga = `${numbers[3]}${numbers[4]}${numbers[5]}`;

  var empat = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  return `(${kurung}) ${tiga}-${empat}`;
}

function createPhoneNumber2(numbers) {
  numbers.splice(0, 0, "("); // [(,1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  numbers.splice(4, 0, ") "); // [(,1, 1, 1, ) , 1, 1, 1, 1, 1, 1, 1]
  numbers.splice(8, 0, "-");
  return numbers.join("");
}

console.log(createPhoneNumber(num));
console.log(createPhoneNumber2(num));
