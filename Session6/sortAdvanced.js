// short advanced

// string
var word = ["cat", "red", "apple", "green", "read"];
word.sort();
console.log(word);

// number
var numbers = [23, 47, 13, 3, 9, 240];

// ascending
var asc = (a, b) => {
  return a - b;
};

// descending
var dsc = (a, b) => {
  return b - a;
};

numbers.sort(asc);
console.log(numbers);

// sort nama by value

// 65 (A) > 66 (B) = false
console.log("A" > "B");

// 65 (A) > 97 (a) = false
console.log("A" > "a");

// 65 (A) < 97 (B) = true
console.log("Alvin" < "alvin");

// 10b (l) > 98 (B) = true
console.log("Alvin" > "Abed");

// sort nama

var persons = [
  ["John", 44],
  ["John", 43],
  ["Baby", 21],
  ["Justin", 29],
];

var personSort = (arr) => {
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1; // minus = a akan duluan dibanding b
    } else if (a[0] > b[0]) {
      return 1; // plus = b akan duluan dibanding a
    } else return a[1] - b[1];
  });
  return arr;
};

var result = personSort(persons);
console.table(result);
