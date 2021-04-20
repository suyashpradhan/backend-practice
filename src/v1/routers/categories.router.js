const express = require("express");
const router = express.Router();

const category = [
  {
    id: 1,
    category: "Mobile",
  },
  {
    id: 2,
    category: "Television",
  },
  {
    id: 1,
    category: "Home Appliances",
  },
];

router.get("/", (req, res) => {
  console.log("Inside Categories");
  const data = `
  <h1>Categories</h1>

  ${category
    .map(({ category }) => {
      return `<h2>${category}</h2>`;
    })
    .join("")}
  `;

  res.send(data);
});

module.exports = router;
