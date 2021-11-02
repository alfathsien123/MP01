function tambah() {
  var a = parseInt(document.getElementById("angka1").value);
  var b = parseInt(document.getElementById("angka2").value);
  return (document.getElementById("hasil").innerHTML = a + b);
}
function kurang() {
  var a = parseInt(document.getElementById("angka1").value);
  var b = parseInt(document.getElementById("angka2").value);
  return (document.getElementById("hasil").innerHTML = a - b);
}
function kali() {
  var a = parseInt(document.getElementById("angka1").value);
  var b = parseInt(document.getElementById("angka2").value);
  return (document.getElementById("hasil").innerHTML = a * b);
}
function bagi() {
  var a = parseInt(document.getElementById("angka1").value);
  var b = parseInt(document.getElementById("angka2").value);
  return (document.getElementById("hasil").innerHTML = a / b);
}

function reset() {
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}
