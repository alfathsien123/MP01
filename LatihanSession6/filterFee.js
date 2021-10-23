// filter fee
const salary = [9100000, 9800000, 9500000, 10300000, 9300000];
const salResult = salary.filter((salrynya) => {
  return salrynya - salrynya * 0.05 > 9000000;
});
console.log(salResult);
