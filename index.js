const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

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

app.get("/wishlist", (req, res) => {
  res.status(201).send(list);
});

app.get("/wishlist/:id", (req, res) => {
  const { id } = req.params;
  const data = productList.find((product) => product.id == id);
  data
    ? res.status(201).json({ data, success: true, message: "Matched product" })
    : res.status(404).json({ data, success: false, message: "no found" });
});

app.post("/wishlist/", (req, res) => {
  const { name, price } = req.body;
  productList.push({ id: Date.now(), name, price });
  res.status(201).json({
    list: productList,
    success: true,
    message: "Product added",
  });
});

app.listen(port, () => {
  console.log(`Example app running on ${port}`);
});
