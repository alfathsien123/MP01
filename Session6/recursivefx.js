// Recursive function
// function yang memanggil dirinya sendiri

var countdown = (counter) => {
  console.log(counter);
  counter--;
  if (counter >= 0) countdown(counter);
};

countdown(5);
