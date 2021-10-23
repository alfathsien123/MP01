// reverse array in place

/*
var num = [1, 2, 3, 4, 5, 6, 7, 8] (length : 8)

var tmp = 

value pertama : value yang akan disimpan ke dalam variabel tmp
1234
value kedua : value langsung menempati index milik value pertama
5678

index value pertama yaitu index ke: 0 1 2 3 => i
index value kedua yaitu index ke: 7 6 5 4 => num.length - 1 - i

1. pindahkan value pertama ke variabel tmp
2. pindagkan value kedua ke index milik variabel pertama
3. pindahkan value pada variabel tmp ke index milik kedua 


*/

var num = [1, 2, 3, 4, 5, 6, 7, 8]
var stop = Math.floor(num.length/2)

console.table(num);

for (i = 0; i < stop; i++)
{
    // 1. pindahkan value pertama ke variabel tmp
    var tmp = num[i]

    // 2. pindagkan value kedua ke index milik variabel pertama
    num[i] = num[num.length - 1 - i]

    // 3. pindahkan value pada variabel tmp ke index milik kedua 
    num[num.length - 1 - i] = tmp
}

console.table(num);