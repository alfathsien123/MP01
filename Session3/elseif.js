var nilai = 30
var grade

if (nilai >= 80  && nilai <= 100) 
{
    grade = "A"
} 

else if (nilai >= 60 && nilai < 80)
{
    grade = "B"
} 

else if (nilai >= 40 && nilai < 60)
{
    grade = "C"
} 

else if (nilai >= 20 && nilai < 40)
{
    grade = "D"
} 

else if (nilai >= 10 && nilai < 20)
{
    grade = "E"
} 

else grade = "F"

console.log(`Nilai : ${nilai} \nGrade : ${grade}`);