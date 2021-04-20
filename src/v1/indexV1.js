const express = require("express");
const app = express();
const PORT = 8000;
const productRoute = require("./routers/products.router");
const categoryRoute = require("./routers/categories.router");

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(200);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
