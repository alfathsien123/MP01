// Double pyramid triangle

var stars = ''
var rows = 5


for (var i = 1; i <= rows; i++)
{
    for (var j = 1; j <= (rows-i); j++)
    {
        stars += '   '
    }

    for (var k = 1; k <= (i-1) * 2 + 1; k++)
    {
        stars += ' * '
    }

    stars += '\n'
}




for (var i = rows; i >= 1; i--)
{
    // spasi per baris
    for(var j = (rows-i); j >= 1; j--)
    {
        stars += "   "
    } 

    for (var k = 1; k <= (i-1) * 2 + 1;  k++)
    {
        stars += " * "
    }
    stars += '\n'
}

console.log(stars);