var stars = ""
var rows = 5

for (var i = rows; i >= 1 ; i--) 
{
        for (var j = 1; j <= i ; j++)
    {
        stars += " * "
    } 
    stars += "\n"

}

for (var i = 2; i <= rows ; i++) 
{
        for (var j = 1; j <= i ; j++)
    {
        stars += " * "
    } 

    stars += "\n"

}

console.log(stars);