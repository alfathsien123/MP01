/*
Blok kode: 
1. Memiliki nama 
2. Dapat digunakan secara berulang
3. Dapat memiliki input dan output

Note:
1. Input adalah proses dimana kita dapat memberikan value pada function untuk digunakan
2. Output adalah proses yang dilakukan oleh function dalam menghasilkan value sehingga dapat disimpan di variabel


*/

/*
keyword function + nama + () + {}

() tempat menulis parameter (variabel yang menyimpan input)
{} tempat menulis task 


*/

// function declaration
function coba() {
  console.log("coba-coba");
}

coba();

// function expression
var lagi = function () {
  console.log("coba lagi");
};

lagi();

// hoisted

leaf();

function leaf() {
  console.log("daun");
}

// not hoisted (error)

// leaf2()

// var leaf2 = function() {console.log("daun");}
