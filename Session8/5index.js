const createInfo = () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const condition = document.querySelector(
    "input[name=condition]:checked"
  ).value;
  const warehouse = document.getElementById("warehouse").value;
  const couriers = document.querySelectorAll("input[name=courier]:checked");

  let courierList = "";
  couriers.forEach((courier) => {
    courierList += `${courier.value} `;
  });

  document.getElementById(
    "result"
  ).innerHTML = `Name : ${name} <br> Price : ${price} <br> Condition : ${condition} <br> Warehouse : ${warehouse} <br> Courier : ${courierList}`;

  // console.log(courierList);
};
