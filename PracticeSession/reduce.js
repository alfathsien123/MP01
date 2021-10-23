// reduce

const num = [1, 2, 3, 4, 5];
const sum = num.reduce((prev, curr) => {
  return prev + curr;
}, 0); // 0 = initial value

console.log(sum);

// atau

const num1 = [1, 2, 3, 4, 5];
const sum1 = num1.reduce((prev, curr) => prev + curr, 0); // kalau tidak ada {} maka tidak perlu 'return'

console.log(sum1);
