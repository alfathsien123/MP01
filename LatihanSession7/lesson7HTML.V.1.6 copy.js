var fruits = [
  { nama: "Apel", price: 10000, stock: 5 },
  { nama: "Anggur", price: 15000, stock: 7 },
  { nama: "Jeruk", price: 20000, stock: 8 },
];

// function untuk menampilkan list buah
const createList = (arr, header, kind = 1) => {
  let list = `${header}\n\n`;
  if (kind) {
    arr.forEach((val, i) => {
      const { nama, price, stock } = val;
      list += `${[i + 1]}. ${nama} || Rp. ${price} || stock : ${stock}\n`;
    });
  } else {
    arr.forEach((val, i) => {
      const { nama, price, qty } = val;
      list += `${[i + 1]}. ${nama} || Rp. ${price} || stock : ${qty}\n`;
    });
  }

  return list;
};

while (true) {
  const menu = parseInt(
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
    const nama = prompt(`Masukkan nama buah :`);
    const price = parseInt(prompt(`Masukkan harga buah :`));
    const stock = parseInt(prompt(`Masukkan stock buah :`));
    // const newFruit = { nama, price, stock };
    fruits.push({ nama, price, stock }); // karena namanya sama ex nama: nama

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
    var carts = [];
    while (true) {
      // Menampilkan daftar buah
      const beli = parseInt(prompt(createList(fruits, "Daftar Buah"))); // buah yang dipilih

      // beli -1 agar nilai sesuai index yaitu dari 0
      // const selName = fruits[beli - 1].name; // Nama buah yang dipilh
      // const selPrice = fruits[beli - 1].price; // Harga buah Nama buah yang dipilh
      // const selStock = fruits[beli - 1].stock; // Stock buah Nama buah yang dipilh
      const { nama, price, stock } = fruits[beli - 1];

      while (true) {
        var qty = parseInt(
          prompt(`Berapa jumlah ${nama} yang ingin dibeli? (stock: ${stock})`)
        );
        if (qty > stock) {
          alert(
            `Quantity yang diminta: ${qty}, melebihi jumlah stock ${stock}`
          );
        } else {
          // Memasukkan ke keranjang
          carts.push({ nama, price, qty });

          // Mengurangi stok
          fruits[beli - 1].stock -= qty;
          break;
        }
      }

      // Menampilkan isi keranjang
      let cartList = createList(carts, "Keranjang", 0);

      const konfirmasi = prompt(
        `${cartList} \nApakah ingin membeli lagi? (ya / tidak)`
      );

      if (konfirmasi.toLowerCase() == "tidak") {
        break;
      }
    }

    // Hitung belanjaan

    let finalPrice = 0;
    carts.forEach((cart) => {
      cart.total = cart.price * cart.qty;

      finalPrice += cart.total;
    });

    // Report pembelanjaan
    var finalReport = "";
    carts.forEach((cart) => {
      const { nama, price, qty, total } = cart;
      finalReport += `${nama} :  Rp. ${price} * ${qty} = Rp. ${total}\n`;
    });

    while (true) {
      // Menampilkan informasi belanja termasuk total uang yang harus dibelanjakan
      const money = parseInt(
        prompt(
          `Detail belanjaan sebagai berikut:\n\n${finalReport}\nTotal: Rp. ${finalPrice}`
        )
      );

      const margin = Math.abs(finalPrice - money);
      if (money < finalPrice) {
        alert(
          `Uang yang anda masukkan kurang Rp. ${margin}, total harga yang harus dibayar Rp. ${finalPrice}`
        );
      } else {
        if (money > finalPrice) {
          alert(`Terima kasih, uang kembalian anda Rp. ${margin}`);
        } else alert(`Terima kasih`);
        carts = []; // kosongkan cart
        break;
      }
    }
  } else {
    break;
  }
}
