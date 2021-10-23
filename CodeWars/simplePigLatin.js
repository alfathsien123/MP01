var x = "Pig latin is cool !";
// return igPay atinlay siay oolcay
function pigIt(str) {
  var toSplit = str.split(" ");
  var hasil = [];
  for (var i = 0; i < toSplit.length; i++) {
    var a = toSplit[i];
    var b = a.split("");
    var c = b[0];
    var jika = b.join("");
    if (
      jika.includes("a") ||
      jika.includes("i") ||
      jika.includes("u") ||
      jika.includes("e") ||
      jika.includes("o") ||
      jika.includes("y") ||
      jika.includes("A") ||
      jika.includes("I") ||
      jika.includes("U") ||
      jika.includes("E") ||
      jika.includes("O")
    ) {
      b.push(c);
      b.splice(0, 1);
      b.push("ay");
    }
    var d = b.join("");
    hasil.push(d);
  }
  var result = hasil.join(" ");
  return result;
}

pigIt(x);
