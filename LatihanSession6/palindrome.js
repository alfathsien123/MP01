// palindrome
// sebuah kalimat yang dibaca sama walau dari arah terbalik (dari belakang) dengan mengabaikan karakter selain huruf

// split
let word = "bc-de-";
let wordArr = word.split("");

// reverse
wordArr.reverse();

// join
let wordJoin = wordArr.join("");

const palindrome = (word) => {
  // ubah ke lower case
  const wordLower = word.toLowerCase();

  // hapus selain huruf
  const wordClean = wordLower.replace(/[^a-z]/g, ""); // (  /[^a-z]/  )regular expression hapus huruf selain a-z

  // ubah menjadi array
  const wordArr = wordClean.split("");

  // ubah urutannya (reverse)
  wordArr.reverse();

  // ubah menjadi satu string
  const wordJoined = wordArr.join("");

  const isSame = wordClean == wordJoined;

  return `${word} : ${isSame}`;
};

console.log(palindrome("Kasur rusak"));
console.log(palindrome("Madam I'm Adam"));
