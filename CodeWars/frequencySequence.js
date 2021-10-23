var str = "aabba";

var sep = "-";

// return => 3-3-2-2-3
function freqSeq(str, sep) {
  return str
    .split("")
    .map((v, i, arr) => arr.filter((vi) => vi === v).length)
    .join(sep);
}
