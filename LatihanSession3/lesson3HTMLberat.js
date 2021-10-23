// Indenx Massa Badan (IBM)
var berat = parseInt(prompt("Masukkan beratbadan (kg):"))
var tinggiCm = parseInt(prompt("Masukkan tinggi badan (cm):"))
var tinggiM = tinggiCm/100
var state
var index = berat/Math.pow(tinggiM, 2)


if (index < 18.5) {state = "Kurang"}
else if (index >= 18.5 && index < 24.9) {state = "Ideal"} 
else if (index >= 25 && index < 29.9) {state = "Ideal"} 
else if (index >= 30 && index < 39.9) {state = "Ideal"} 
else  state = "Obesitas"

var info = `Berat: ${berat} kg\nTinggi badan: ${tinggiCm} cm\nIBM: ${index}\nStatus: ${state}`
alert(info)
console.log(info);
