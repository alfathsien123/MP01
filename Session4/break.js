// Break : Menghentikan proses loop

// Print 1-3

for (var i = 1; i <=5; i++)
{
    if (i == 4) break;
    console.log(`Loop ${i}`);
}

// mencari angka random (0-99) yang dapat dibagi 5
// infinite loop :  loop yang kondisinya selalu true

while (true)
{
    var x = Math.floor(Math.random() * 100)

    console.log(`${x}`);
    if (x%5 == 0) 
    {
        // console.log(`Angka dapat dibagi 5: ${x}`);
        break;
    }
}