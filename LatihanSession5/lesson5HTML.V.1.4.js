var fruits = [
  ["Apel", 10000, 5],
  ["Anggur", 15000, 7],
  ["Jeruk", 20000, 8],
];

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
    // Menampilkan daftar buah
    var fruitList = "Daftar Buah:\n\n";
    for (i = 0; i < fruits.length; i++) {
      fruitList += `${[i + 1]}. ${fruits[i][0]}  Rp. ${fruits[i][1]}  [${
        fruits[i][2]
      }]\n`;
    }
    alert(fruitList);
  } else if (menu == 2) {
    // Menambahkan buah baru
    var newName = prompt(`Masukkan nama buah :`);
    var newPrice = parseInt(prompt(`Masukkan harga buah :`));
    var newStock = parseInt(prompt(`Masukkan stock buah :`));
    var newFruit = [[newName], [newPrice], [newStock]];
    fruits.push(newFruit);

    // Menampilkan daftar buah
    var fruitList = "Daftar Buah:\n\n";
    for (i = 0; i < fruits.length; i++) {
      fruitList += `${[i + 1]}. ${fruits[i][0]}  Rp. ${fruits[i][1]}  [${
        fruits[i][2]
      }]\n`;
    }
    alert(fruitList);
  } else if (menu == 3) {
    // Menampilkan daftar buah
    for (i = 0; i < fruits.length; i++) {
      fruitList += `${[i + 1]}. ${fruits[i][0]}  Rp. ${fruits[i][1]}  [${
        fruits[i][2]
      }]\n`;
    }
    // Menghapus buah
    var selIndex = parseInt(prompt(fruitList));
    fruits.splice(selIndex - 1, 1);

    // Menampilkan daftar buah baru
    var fruitList = "Daftar Buah:\n\n";
    for (i = 0; i < fruits.length; i++) {
      fruitList += `${[i + 1]}. ${fruits[i][0]}  Rp. ${fruits[i][1]}  [${
        fruits[i][2]
      }]\n`;
    }
    alert(fruitList);
  } else if (menu == 4) {
    while (true) {
      // Menampilkan daftar buah
      var fruitList = "Daftar Buah:\n\n";
      for (i = 0; i < fruits.length; i++) {
        fruitList += `${[i + 1]}. ${fruits[i][0]}  Rp. ${fruits[i][1]}  [${
          fruits[i][2]
        }]\n`;
      }

      var beli = parseInt(prompt(fruitList)); // buah yang dipilih

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
      var cartList = "Keranjang:\n\n";
      for (i = 0; i < cart.length; i++) {
        cartList += `${[i + 1]}. ${cart[i][0]}  Rp. ${cart[i][1]}  [${
          cart[i][2]
        }]\n`;
      }

      var konfirmasi = prompt(
        `${cartList} \nApakah ingi membeli lagi? (ya / tidak)`
      );

      if (konfirmasi == "tidak") {
        break;
      }
    }

    // Hitung belanjaan

    var finalPrice = 0;
    for (i = 0; i < cart.length; i++) {
      // harga * stock
      cart[i][3] = cart[i][1] * cart[i][2];
    }

    for (i = 0; i < cart.length; i++) {
      // total harga keseluruhan
      finalPrice += cart[i][3];
    }

    // Report pembelanjaan
    var finalReport = "";
    for (i = 0; i < cart.length; i++) {
      // harga * stock
      finalReport += `${cart[i][0]} :  Rp. ${cart[i][1]} * ${cart[i][2]} = Rp. ${cart[i][3]}\n`;
    }

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
