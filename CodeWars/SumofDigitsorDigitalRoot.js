/* jawaban terbaik : 
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
*/

const n = 493193;

function digital_root(n) {
  var toString = n.toString();
  var pecah = toString.split("");
  var nilai = 0;
  pecah.forEach((x) => {
    var int = parseInt(x);
    nilai += int;
  });
  while (nilai > 9) {
    var toString2 = nilai.toString();
    var pecah2 = toString2.split("");
    var nilai2 = 0;

    pecah2.forEach((x) => {
      var int = parseInt(x);
      nilai2 += int;
    });
    if (nilai2 > 9) {
      var toString3 = nilai2.toString();
      var pecah3 = toString3.split("");
      var nilai3 = 0;

      pecah3.forEach((x) => {
        var int = parseInt(x);
        nilai3 += int;
      });

      return nilai3;
    }
    return nilai2;
  }

  return nilai;
}

console.log(digital_root(n));
