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
