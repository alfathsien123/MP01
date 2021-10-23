class Product {
  constructor(nama, price, stock) {
    this.nama = nama;
    this.price = price;
    this.stock = stock;
    this.qty = 0;
    this.total = 0;
  }
}

class FastFood extends Product {
  constructor(nama, price, stock, expired) {
    super(nama, price, stock);
    this.category = 1;
    this.expired = expired;
  }
}
class Cloth extends Product {
  constructor(nama, price, stock, size) {
    super(nama, price, stock);
    this.category = 2;
    this.size = size;
  }
}

class Electronic extends Product {
  constructor(nama, price, stock, warranty) {
    super(nama, price, stock);
    this.category = 3;
    this.warranty = warranty;
  }
}

class Fruits extends Product {
  constructor(nama, price, stock, sugar) {
    super(nama, price, stock);
    this.category = 4;
    this.sugar = sugar;
  }
}

const products = [
  { category: 1, nama: "Noodle", price: 20000, stock: 8, expired: 2020 },
  { category: 2, nama: "Hoodie", price: 15000, stock: 7, size: "L" },
  { category: 3, nama: "Headphone", price: 20000, stock: 8, warranty: "yes" },
  { category: 4, nama: "Apple", price: 10000, stock: 5, sugar: "High" },
];

// function untuk menampilkan list produk
const createList = (arr, header, kind = 1) => {
  let list = `${header}\n\n`;

  if (kind) {
    arr.forEach((val, i) => {
      const { nama, price, stock, category, expired, size, sugar, warranty } =
        val;
      let newlist = `${
        i + 1
      }. NAME : ${nama} || STOCK : stock : ${stock} || PRICE : Rp. ${price}`;
      switch (category) {
        case 1:
          newlist += `|| EXP : ${expired}\n`;
          break;
        case 2:
          newlist += `|| Size : ${size}\n`;
          break;
        case 3:
          newlist += `|| Warranty : ${warranty}\n`;
          break;
        case 4:
          newlist += `|| Sugar : ${sugar}\n`;
          break;

        default:
          break;
      }

      list += newlist;
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
      1. Menampilkan daftar produk
      2. Menambah produk
      3. Menghapus produk
      4. Membeli produk
      5. Exit
      `
    )
  );

  var fruitList = "Daftar Buah:\n\n";
  // Pemilihan option
  if (menu == 1) {
    alert(createList(products, "Daftar Produk"));
  } else if (menu == 2) {
    const catOpt = parseInt(
      prompt(
        `Kategori Produk\n\n` +
          `1. Cepat Saji\n` +
          `2. Pakaian\n` +
          `3. Elektronik\n` +
          `4. Buah\n`
      )
    ); // category option

    // Menambahkan produk baru
    const nama = prompt(`Masukkan nama produk :`);
    const price = parseInt(prompt(`Masukkan harga produk :`));
    const stock = parseInt(prompt(`Masukkan stock produk :`));

    let newProduct;
    switch (catOpt) {
      case 1:
        const expired = prompt(`Masukkan waktu expired`);
        newProduct = new FastFood(nama, price, stock, expired);
        break;
      case 2:
        const size = prompt(`Masukkan size produk`);
        newProduct = new Cloth(nama, price, stock, size);
        break;
      case 3:
        const warranty = prompt(`Masukkan status garansi`);
        newProduct = new Electronic(nama, price, stock, warranty);
        break;
      default:
        const sugar = prompt(`Masukkan tingkat kadar gula`);
        newProduct = new Fruits(nama, price, stock, sugar);
        break;
    }

    // const newFruit = { nama, price, stock };
    products.push(newProduct); // karena namanya sama ex nama: nama

    // Menampilkan daftar Produk
    alert(createList(products, "Daftar Produk"));
  } else if (menu == 3) {
    // Menampilkan daftar Produk

    // Menghapus Produk
    var selIndex = parseInt(prompt(createList(products, "Daftar Produk")));
    products.splice(selIndex - 1, 1);

    // Menampilkan daftar Produk baru
    alert(createList(products, "Daftar Produk"));
  } else if (menu == 4) {
    var carts = [];
    while (true) {
      // Menampilkan daftar Produk
      const beli = parseInt(prompt(createList(products, "Daftar Produk"))); // Produk yang dipilih

      // beli -1 agar nilai sesuai index yaitu dari 0
      // const selName = fruits[beli - 1].name; // Nama buah yang dipilh
      // const selPrice = fruits[beli - 1].price; // Harga buah Nama buah yang dipilh
      // const selStock = fruits[beli - 1].stock; // Stock buah Nama buah yang dipilh
      const { nama, price, stock } = products[beli - 1];

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
          products[beli - 1].stock -= qty;
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
