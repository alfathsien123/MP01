function findShort(str) {
  var split = str.split(" ");
  var short = split.map((string) => {
    return (string = string.length);
  });
  short.sort((a, b) => {
    return a - b;
  });
  return short[0];
}

// function findShortestWord(str) {
//   var words = str.split(" ");
//   var shortest = words.reduce((shortestWord, currentWord) => {
//     return currentWord.length < shortestWord.length
//       ? currentWord
//       : shortestWord;
//   }, words[0]);
//   return shortest.length;
// }

console.log(
  findShort(
    "21inc Ripple BTC ProofOfStake BTC ProofOfStake ProofOfStake Ripple DarkCoin Factom Bitcoin"
  )
);
