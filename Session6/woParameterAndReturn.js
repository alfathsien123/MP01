// without parameter and return

// input : parameter
// output : return

var fullname = () => {
  var firstname = "Isac";
  var lastname = "Newton";

  console.log(`Halo nama saya ${firstname} ${lastname}`);
};

fullname(); // Halo nama saya Isac Newton

var result = fullname(); // Halo nama saya Isac Newton
console.log(result); // undefined

var intResult = parseInt("123");
console.log(intResult);
