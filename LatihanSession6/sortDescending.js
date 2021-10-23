const words = ["Elephant", "Black", "Yes", "Yas", "Rain"];
words.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
});

console.log(words);
