
// Menyamakan value nilai yang disimpan pada variabel 'key' dengan 'value' yang ada pada 'case

// switch (key) {
//     case value_1:
        
//         break;
//     case value_2:
        
//         break;
//     case value_3:
        
//         break;

//     default:
//         break;
// }

var tech = "HTML"

switch (tech) {
    case "HTML":
        console.log("HTML berfungsi untuk membuat kerangka website");
        break;
    case "CSS":
        console.log("CSS berfungsi untuk mengatur style website");
        break;
    case "Javascript":
        console.log("Javascript berfungsi untuk mengolah data");
        break;

    default:
        console.log(`Informasi mengenai ${tech} tidak ditemukan`);
        break;
}

console.log("Keluar dari Switch ");


var number = 121

switch (true) {
    case number % 2 == 0:
        console.log("Genap");
        break;

    default:
        console.log("Ganjil");
        break;
}

