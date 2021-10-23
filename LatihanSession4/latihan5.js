// Fizz Buzz

/*
1. Jika suatu angka dapat dibagi 3, gantikan dengan kata Fizz
2. jika dapat dibagi 5, gantikan dengan kata Buzz
3. jika dapat dibagi 3 dan 5, gantikan dengan FizzBizz
4. jika ingin mencari nilai yang dapat dibagi oleh dua angka tertentu, maka bagilah dengan angka hasil perkalian dari dua nilai tersebut
5. FizzBuzz akan muncul saat suatu angka dapat dibagi dengan 15.




*/

var number = 45

for (var i = 1; i <= number; i++)
{ 
    if (i%15 == 0) {console.log('FizzBuzz');}
    else if (i%3 == 0) {console.log('Fizz');}
    else if (i%5 == 0) {console.log('Buzz');}
    else console.log(i);

}