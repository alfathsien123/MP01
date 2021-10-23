function checkExam(array1, array2) {
  var hasil = 0;
  for (var i = array1.length - 1; i >= 0; i--) {
    if (array1[i] == array2[i]) hasil = hasil + 4;
    else if (array1[i] !== array2[i]) {
      if (array2[i] == "") hasil = hasil + 0;
      else hasil = hasil - 1;
    }
  }
  if (hasil <= 0) hasil = 0;

  return hasil;
}
