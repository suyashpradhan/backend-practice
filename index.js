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

//! Get Request
app.get("/", (req, res) => {
  res.send("hello world");
});

//! Get Request with data
app.get("/products", (req, res) => {
  const data = `
  ${productList
    .map((product) => {
      return `<div>
        <h1>${product.name}</h1>
        <h3>${product.price}</h3>
      </div>`;
    })
    .join("")}
  `;
  res.send(data);
});

//! Using Params
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = productList.find((product) => product.id === Number(id));
  if (product) {
    return res.json({ product, status: true });
  }
  res.json({ status: false, message: "Something went wrong!" });
});

//! ExpressJS Port
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
