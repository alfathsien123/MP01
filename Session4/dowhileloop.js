// Menampilkan angka 1-5

// Alur proses while (condition first)
/*
 1.  Membuat variabel init
 2.  Evaluasi condition
  a. condition : true, memproses task, melakukan modifikasi
  b. condition : false, keluar dari block loop
*/

// Alur proses dowhile (task first)
/*
 1.  Membuat variabel init
 2.  Menjalankan task, menjalankan modifikasi
 3.  Evaluasi condition
  a. condition : true, kembali ke proses 2
  b. condition : false, keluar dari block do while
*/

    // init
var angka = 1
do 
{
    // Task
   console.log(`Number: ${angka}`); 
    // Modification   
   angka++

    // Condition
} while (angka <= 5);
