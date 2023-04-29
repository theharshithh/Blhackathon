const dosaPrice = 40;
const idlyPrice = 30;
const samosaPrice = 20; 
const momoPrice = 40; 

const increase = (item) => {
  const quantityElement = document.getElementById(`${item}-quantity`);
  let quantity = parseInt(quantityElement.innerText);
  quantity++;
  quantityElement.innerText = quantity.toString();
};

const decrease = (item) => {
  const quantityElement = document.getElementById(`${item}-quantity`);
  let quantity = parseInt(quantityElement.innerText);
  if (quantity > 0) {
    quantity--;
    quantityElement.innerText = quantity.toString();
  }
};

const addToCart = () => {
  const dosaQuantity = parseInt(document.getElementById("dosa-quantity").innerText);
  const idlyQuantity = parseInt(document.getElementById("idly-quantity").innerText);
  const samosaQuantity = parseInt(document.getElementById("samosa-quantity").innerText);
  const momoQuantity = parseInt(document.getElementById("momo-quantity").innerText);
  if (dosaQuantity === 0 && idlyQuantity === 0 && samosaQuantity==0 && momoQuantity == 0) {
    alert("Please select at least one item.");
    return;
  }
  const cartItems = document.getElementById("cart-items");
  // dosa adding
  if (dosaQuantity > 0) {
    const dosaRow = document.createElement("tr");
    const dosaNameCell = document.createElement("td");
    dosaNameCell.innerText = "Dosa";
    dosaRow.appendChild(dosaNameCell);
    const dosaQuantityCell = document.createElement("td");
    dosaQuantityCell.innerText = dosaQuantity.toString();
    dosaRow.appendChild(dosaQuantityCell);
    const dosaPriceCell = document.createElement("td");
    dosaPriceCell.innerText = `₹${(dosaQuantity * dosaPrice).toFixed(2)}`;
    dosaRow.appendChild(dosaPriceCell);
    cartItems.appendChild(dosaRow);
  }
  //idly adding 
  if (idlyQuantity > 0) {
    const idlyRow = document.createElement("tr");
    const idlyNameCell = document.createElement("td");
    idlyNameCell.innerText = "Idly";
    idlyRow.appendChild(idlyNameCell);
    const idlyQuantityCell = document.createElement("td");
    idlyQuantityCell.innerText = idlyQuantity.toString();
    idlyRow.appendChild(idlyQuantityCell);
    const idlyPriceCell = document.createElement("td");
    idlyPriceCell.innerText = `₹${(idlyQuantity * idlyPrice).toFixed(2)}`;
    idlyRow.appendChild(idlyPriceCell);
    cartItems.appendChild(idlyRow);
  }
  //samosa adding
  if (samosaQuantity > 0) {
    const samosaRow = document.createElement("tr");
    const samosaNameCell = document.createElement("td");
    samosaNameCell.innerText = "Samosa";
    samosaRow.appendChild(samosaNameCell);
    const samosaQuantityCell = document.createElement("td");
    samosaQuantityCell.innerText = samosaQuantity.toString();
    samosaRow.appendChild(samosaQuantityCell);
    const samosaPriceCell = document.createElement("td");
    samosaPriceCell.innerText = `₹${(samosaQuantity * samosaPrice).toFixed(2)}`;
    samosaRow.appendChild(samosaPriceCell);
    cartItems.appendChild(samosaRow);
  }
  //samosa
  if (momoQuantity > 0) {
    const momoRow = document.createElement("tr");
    const momoNameCell = document.createElement("td");
    momoNameCell.innerText = "Momo";
    momoRow.appendChild(momoNameCell);
    const momoQuantityCell = document.createElement("td");
    momoQuantityCell.innerText = momoQuantity.toString();
    momoRow.appendChild(momoQuantityCell);
    const momoPriceCell = document.createElement("td");
    momoPriceCell.innerText = `₹${(momoQuantity * momoPrice).toFixed(2)}`;
    momoRow.appendChild(momoPriceCell);
    cartItems.appendChild(momoRow);
  }
  const totalPrice = dosaQuantity * dosaPrice + idlyQuantity * idlyPrice + samosaQuantity*samosaPrice + momoQuantity * momoPrice;
  document.getElementById("total-price").innerText = `₹${totalPrice.toFixed(2)}`;
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".cart").style.display = "block";
};

const checkout = () => {
  const totalPrice = dosaPrice * parseInt(document.getElementById("dosa-quantity").innerText) +
    idlyPrice * parseInt(document.getElementById("idly-quantity").innerText) +
    samosaPrice * parseInt(document.getElementById("samosa-quantity").innerText) +
    momoPrice * parseInt(document.getElementById("momo-quantity").innerText);
  const itemName = `${parseInt(document.getElementById("dosa-quantity").innerText)} dosas, ${parseInt(document.getElementById("idly-quantity").innerText)} idlys, ${parseInt(document.getElementById("samosa-quantity").innerText)} samosas, ${parseInt(document.getElementById("momo-quantity").innerText)} momoms`;
  const cartDetails = {
    itemName: itemName,
    totalPrice: totalPrice.toFixed(0)
  };
  localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  window.location.href = "cart.html";
};
