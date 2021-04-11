const express = require("express");
const app = express();
const port = 8000;

const productList = [
  {
    id: 1,
    name: "Apple",
    price: 200,
  },
  {
    id: 2,
    name: "Mango",
    price: 800,
  },
];

const totalPrice = productList.reduce((acc, val) => acc.price + val.price);
const list = `<h1>Products</h1>
  ${productList
    .map(
      (product) =>
        `<div>
        <h1>${product.name}</h1>
    <h2>${product.price}</h2>
        </div>
    `
    )
    .join("")}
    <hr/><h3>Total Price: ${totalPrice}</h3>`;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/products", (req, res) => {
  res.send(list);
});

app.listen(port, () => {
  console.log(`Example app running on ${port}`);
});
