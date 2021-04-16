const express = require("express");
const router = express.Router();
router.use(express.json());

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

router.route("/").get((req, res) => {
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

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const product = productList.find((product) => product.id === Number(id));
    if (product) {
      return res.json({ product, status: true });
    }
    res.json({ status: false, message: "Something went wrong!" });
  })
  .post((req, res) => {
    const { id } = req.params;
    const updateProduct = req.body;

    productList.forEach((product) => {
      if (product.id === parseInt(id, 10)) {
        Object.keys(updateProduct).forEach((key) => {
          if (key in product) {
            product[key] = updateProduct[key];
          }
        });
      }
    });

    res.json({ productList, success: true });
  });

module.exports = router;
