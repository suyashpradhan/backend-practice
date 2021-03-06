const express = require("express");
const app = express();
const json = express.json();
const PORT = 8000;
const { connectDB } = require("./src/v2/database/db.connection");

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/data", (req, res) => {
  res.send("Inside data");
  const 
});

app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(200);
});

app.post("/data", (req, res) => {
  const { name, price } = req.body;
  console.log(name, price);
  res.json(200).send();
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
