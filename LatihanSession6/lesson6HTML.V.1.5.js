var fruits = [
  ["Apel", 10000, 5],
  ["Anggur", 15000, 7],
  ["Jeruk", 20000, 8],
];

// function untuk menampilkan list buah
var createList = (arr, header) => {
  var list = `${header}\n\n`;
  arr.forEach((val, i) => {
    list += `${[i + 1]}. ${val[0]} || Rp. ${val[1]} || stock : ${val[2]}\n`;
  });
  return list;
};

var cart = [];

while (true) {
  var menu = parseInt(
    prompt(
      `
      Apa yang ingin anda lakukan
      1. Menampilkan daftar buah
      2. Menambah buah
      3. Menghapus buah
      4. Membeli buah
      5. Exit
      `
    )
  );

  var fruitList = "Daftar Buah:\n\n";
  // Pemilihan option
  if (menu == 1) {
    alert(createList(fruits, "Daftar Buah"));
  } else if (menu == 2) {
    // Menambahkan buah baru
    var newName = prompt(`Masukkan nama buah :`);
    var newPrice = parseInt(prompt(`Masukkan harga buah :`));
    var newStock = parseInt(prompt(`Masukkan stock buah :`));
    var newFruit = [[newName], [newPrice], [newStock]];
    fruits.push(newFruit);

    // Menampilkan daftar buah
    alert(createList(fruits, "Daftar Buah"));
  } else if (menu == 3) {
    // Menampilkan daftar buah

    // Menghapus buah
    var selIndex = parseInt(prompt(createList(fruits, "Daftar Buah")));
    fruits.splice(selIndex - 1, 1);

    // Menampilkan daftar buah baru
    alert(createList(fruits, "Daftar Buah"));
  } else if (menu == 4) {
    while (true) {
      // Menampilkan daftar buah
      var beli = parseInt(prompt(createList(fruits, "Daftar Buah"))); // buah yang dipilih

      // beli -1 agar nilai sesuai index yaitu dari 0
      var selName = fruits[beli - 1][0]; // Nama buah yang dipilh
      var selPrice = fruits[beli - 1][1]; // Harga buah Nama buah yang dipilh
      var selStock = fruits[beli - 1][2]; // Stock buah Nama buah yang dipilh

      while (true) {
        var selQty = parseInt(
          prompt(
            `Berapa jumlah ${selName} yang ingin dibeli? (Stock: ${selStock})`
          )
        );
        if (selQty > selStock) {
          alert(
            `Quantity yang diminta: ${selQty}, melebihi jumlah stock ${selStock}`
          );
        } else {
          // Memasukkan ke keranjang
          cart.push([selName, selPrice, selQty]);

          // Mengurangi stok
          fruits[beli - 1][2] -= selQty;
          break;
        }
      }

      // Menampilkan isi keranjang
      var cartList = createList(cart, "Keranjang");

      var konfirmasi = prompt(
        `${cartList} \nApakah ingi membeli lagi? (ya / tidak)`
      );

      if (konfirmasi == "tidak") {
        break;
      }
    }

    // Hitung belanjaan

    var finalPrice = 0;
    cart.forEach((cart) => {
      cart[3] = cart[1] * cart[2];

      finalPrice += cart[3];
    });

    // Report pembelanjaan
    var finalReport = "";
    cart.forEach((cart) => {
      finalReport += `${cart[0]} :  Rp. ${cart[1]} * ${cart[2]} = Rp. ${cart[3]}\n`;
    });

    while (true) {
      // Menampilkan informasi belanja termasuk total uang yang harus dibelanjakan
      var money = parseInt(
        prompt(
          `Detail belanjaan sebagai berikut:\n\n${finalReport}\nTotal: Rp. ${finalPrice}`
        )
      );

      var margin = Math.abs(finalPrice - money);
      if (money < finalPrice) {
        alert(
          `Uang yang anda masukkan kurang Rp. ${margin}, total harga yang harus dibayar Rp. ${finalPrice}`
        );
      } else {
        if (money > finalPrice) {
          alert(`Terima kasih, uang kembalian anda Rp. ${margin}`);
        } else alert(`Terima kasih`);
        cart = []; // kosongkan cart
        break;
      }
    }
  } else {
    break;
  }
}
