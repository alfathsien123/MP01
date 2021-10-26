function iqTest(numbers) {
  var arrNum = numbers.split(" ").map((x) => x % 2);
  var jml = 0;
  arrNum.forEach((x) => (jml += x));
  var hasil = jml > 1 ? 0 : 1;
  var jawaban = arrNum.indexOf(hasil) + 1;
  return jawaban;
}

console.log(iqTest("1 2 3 5 7"));
