var hari = ["Senin", "Selasa", "Rabu"];
var arrChecking = (arr) => {
  var arrLen = arr.length;
  var arrJoin = arr.join(", ");

  console.log(`Array ini memiliki ${arrLen} data sebagai berikut: ${arrJoin}`);
};

arrChecking(hari);
