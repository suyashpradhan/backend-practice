const express = require("express");
const app = express();
const port = 8000;
const productRoute = require("./src/routers/products.router");
const categoryRoute = require("./src/routers/categories.router");

//! Adding middleware
const getMyID = (req, res, next) => {
  console.log("Inside middleware", req.method);
  next();
};

app.use(getMyID);
app.use("/products", productRoute);
app.use("/categories", categoryRoute);

//! Get Request
app.get("/", (req, res) => {
  res.send("hello world");
});

//! ExpressJS Port
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
