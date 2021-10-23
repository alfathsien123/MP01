function getCount(str) {
  var vowelsCount = 0;
  var split = str.split("");
  for (var i = split.length - 1; i >= 0; i--) {
    if (
      split[i] == "a" ||
      split[i] == "i" ||
      split[i] == "u" ||
      split[i] == "e" ||
      split[i] == "o"
    ) {
      vowelsCount++;
    }
  }

  // enter your majic here

  return vowelsCount;
}

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
