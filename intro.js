const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello world, intro to express js");
});

app.get("/wishlist", (req, res) => {
  res.status(201).send(list);
});
