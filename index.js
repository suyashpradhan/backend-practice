const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());

//! Demo Data
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

//! Getting Total Price
const totalPrice = productList.reduce((acc, val) => acc.price + val.price);

//! Getting Product List
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

//! GET Request
app.get("/", (req, res) => {
  res.send("hello world!");
});

//! Request with Status Code
app.get("/wishlist", (req, res) => {
  res.status(201).send(list);
});

//! GET Request with id, status and message
app.get("/wishlist/:id", (req, res) => {
  const { id } = req.params;
  const data = productList.find((product) => product.id == id);
  data
    ? res.status(201).json({ data, success: true, message: "Matched product" })
    : res.status(404).json({ data, success: false, message: "no found" });
});

//! POST request
app.post("/wishlist", (req, res) => {
  const { name, price } = req.body;
  productList.push({ id: 3, name, price });
  res.status(201).json({
    productList,
    success: true,
    message: "Product added",
  });
});

//! PORT info
app.listen(port, () => {
  console.log(`Example app running on ${port}`);
});
