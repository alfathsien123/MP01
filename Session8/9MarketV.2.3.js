/////////////////
// Init Valut //
///////////////

let products = [
  {
    id: 1634738031124,
    category: "Fast Food",
    name: "Noodle",
    price: 3500,
    stock: 9,
  },
  {
    id: 1634738031125,
    category: "Electronic",
    name: "Handphone",
    price: 430000,
    stock: 8,
  },
  {
    id: 1634738031126,
    category: "Cloth",
    name: "Hoodie",
    price: 30000,
    stock: 7,
  },
  {
    id: 1634738031127,
    category: "Fruit",
    name: "Apple",
    price: 10000,
    stock: 8,
  },
];

const categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];
let carts = [];

/////////////////////////
// Calculate All Items//
///////////////////////

const fnPayment = () => {
  const listPayment = carts.map((cart) => {
    const { id, category, name, price, qty } = cart;
    return `<p> ${id} | ${category} | ${name} | ${price} * ${qty} = ${
      price * qty
    } </p>`;
  });

  let subTotal = 0;
  carts.forEach((cart) => {
    subTotal += cart.price * cart.qty;
  });

  const ppn = subTotal * 0.1;
  const finalTotal = subTotal + ppn;

  const listDetail = listPayment.join("");
  const listTotal = `<h3>Sub Total Rp. ${subTotal.toLocaleString(
    "id"
  )}</h3><h3>PPN Rp. ${ppn.toLocaleString(
    "id"
  )}</h3></h3><h3>Total Rp. ${finalTotal.toLocaleString("id")}</h3>
  `;

  document.getElementById("payment").innerHTML = listDetail + listTotal;
};

//////////////////
// Render Cart //
////////////////

const fnRenderCart = () => {
  const listCart = carts.map((cart) => {
    const { id, category, name, price, qty, stock } = cart;
    return `
  <tr>  <td>${id}</td>
  <td>${category}</td>
  <td>${name}</td>
  <td>${price}</td>
  <td>${qty}</td>
  <td><input type="button" value="Delete" onclick="fnDeleteCart(${id})"/></td>
  </tr>
`;
  });

  document.getElementById("carts").innerHTML = listCart.join("");
};

//////////////////
// Render List //
////////////////

const fnRenderList = (index) => {
  const listProduct = products.map((product) => {
    const { id, category, name, price, stock } = product;
    if (id != index) {
      return `
    <tr>  <td>${id}</td>
    <td>${category}</td>
    <td>${name}</td>
    <td>${price}</td>
    <td>${stock}</td>
    <td><input type="button" value="Add" onclick="fnAdd(${id})" /></td>
    <td><input type="button" value="Delete" onclick="fnDelete(${id})" /></td>
    <td><input type="button" value="Edit" onclick="fnEdit(${id})" /></td>
    
    </tr>
  `;
    }
    return `
    <tr>  <td>${id}</td>
    <td>${category}</td>
    <td><input value="${name}" type="text" id="nameEdit"></td>
    <td><input value="${price}" type="text" id="priceEdit"></td>
    <td><input value="${stock}" type="text" id="stockEdit"></td>
    <td><input type="button" value="Add" disabled/></td>
    <td><input type="button" value="Save" onclick="fnSave(${id})"/></td>
    <td><input type="button" value="Cancel" onclick="fnCancel()" /></td>
    
    </tr>
  `;
  });
  const listCategory = categories.map((category) => {
    return `<option value="${category}">${category}</option>`;
  });

  // menghilangkan tanda , pada tabel
  document.getElementById("render").innerHTML = listProduct.join("");
  document.getElementById("catFilter").innerHTML = listCategory.join("");
  document.getElementById("catInput").innerHTML = listCategory.join("");
};

////////////////
// Add  Cart //
//////////////

const fnAdd = (index) => {
  // Dapatkan object produk yang terpilih (diklik)
  const selectedProduct = products.find((product) => {
    return product.id == index;
  });

  // periksa stock pada produk terpilih, apakah sudah habis (mencapai 0)
  if (selectedProduct.stock == 0) {
    alert("Stock sudah mencapai 0");
  } else {
    const foundCart = carts.find((cart) => {
      return cart.id == index;
    });

    // jika produk tidak ditemukan di cart
    if (!foundCart) {
      const { id, category, name, price } = selectedProduct;
      carts.push({ id, category, name, price, qty: 1 });
    } else {
      const idx = carts.findIndex((cart) => {
        return cart.id == index;
      });
      carts[idx].qty++;
    }

    const idx = products.findIndex((product) => {
      return product.id == index;
    });
    products[idx].stock--;
  }

  fnRenderList();
  fnRenderCart();
};

//////////////////
///// Edit //////
////////////////

const fnEdit = (index) => {
  fnRenderList(index);
};

//////////////////
///// Cancel //////
////////////////

const fnCancel = () => {
  fnRenderList();
};

//////////////////
///// Save //////
////////////////

const fnSave = (index) => {
  // get all new data from edit (text box)
  const name = document.getElementById("nameEdit").value;
  const price = document.getElementById("priceEdit").value;
  const stock = document.getElementById("stockEdit").value;

  // found index
  const found = products.findIndex((product) => {
    return product.id == index;
  });

  // change data
  products[found] = { ...products[found], name, price, stock };

  fnRenderList();
};

//////////////////
//// Delete /////
////////////////

const fnDelete = (index) => {
  products = products.filter((product) => {
    return product.id != index;
  });
  fnRenderList();
};

///////////////////////
//// Delete Cart /////
/////////////////////

const fnDeleteCart = (index) => {
  // temukan index product pada array products
  const idxProduct = products.findIndex((product) => {
    return product.id == index;
  });

  // temukan index product pada array carts
  const idxCart = carts.findIndex((cart) => {
    return cart.id == index;
  });

  // menjumlahkan stock pada array products dengan qty pada array carts
  products[idxProduct].stock += carts[idxCart].qty;

  // menghapus data dari carts
  carts = carts.filter((cart) => {
    return cart.id != index;
  });
  fnRenderCart();
  fnRenderList();
};

////////////////////
// Render Filter //
//////////////////

const fnRenderFilter = (arr) => {
  const listProduct = arr.map((product) => {
    const { id, category, name, price, stock } = product;
    return `
      <tr>  <td>${id}</td>
      <td>${category}</td>
      <td>${name}</td>
      <td>${price}</td>
      <td>${stock}</td>
      <td><input type="button" value="Add" onclick="fnAdd(${id})" /></td>
    <td><input type="button" value="Delete" onclick="fnDelete(${id})" /></td>
    <td><input type="button" value="Edit" onclick="fnEdit(${id})" /></td>
      </tr>
    `;
  });

  document.getElementById("render").innerHTML = listProduct.join("");
};

///////////////////
// Reset Filter //
/////////////////

const fnResetFilter = () => {
  const inputTags = document.getElementsByName("txtFilter");
  for (const input of inputTags) {
    input.value = "";
  }

  fnRenderList();
};

/////////////////
// Input Data //
///////////////

const fnInputData = () => {
  // get data from html
  const name = document.getElementById("nameInput").value;
  const price = parseInt(document.getElementById("priceInput").value);
  const stock = parseInt(document.getElementById("stockInput").value);
  const category = document.getElementById("catInput").value;

  // create date object
  const date = new Date();
  const id = date.getTime(); // untuk memasukkan ID

  // masukkan data baru

  products.push({ id, name, price, category, stock });

  // clean isian data (text yang diketik di kotak)
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("stockInput").value = "";

  // show the list
  fnRenderList();
};

/////////////////
// Filter Name //
///////////////

const fnFilterName = () => {
  // get data from user
  const keyword = document.getElementById("nameFilter").value;

  // filter
  const filterResult = products.filter((product) => {
    const nameLow = product.name.toLowerCase();
    const keywordLow = keyword.toLowerCase();
    return nameLow.includes(keywordLow);
  });

  fnRenderFilter(filterResult);
};

///////////////////
// Filter Price //
/////////////////

const fnFilterPrice = () => {
  const min = document.getElementById("min").value;
  const max = document.getElementById("max").value;

  let filterResult = products;

  // all text boxes dont empty
  if (!(min == "" || max == "")) {
    filterResult = products.filter((product) => {
      const { price } = product;
      return price >= min && price <= max;
    });
  }
  fnRenderFilter(filterResult);
};

//////////////////////
// Filter Category //
////////////////////

const fnFilterCategory = () => {
  const selectedCategory = document.getElementById("catFilter").value;
  let filterResult = products;
  if (selectedCategory != "All") {
    filterResult = products.filter((product) => {
      return product.category == selectedCategory;
    });
  }

  fnRenderFilter(filterResult);
};

fnRenderList();
