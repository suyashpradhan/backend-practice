const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose.connect(
    "mongodb+srv://suyash:suyash123@suyash-cluster.l8esj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

const product = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("products", product);

/* connectDB()
  .then(() => {
    const newProduct = Product.create({
      productName: "Iphone X",
      productPrice: 50000,
    });
  })
  .catch((err) => {
    console.log(err);
  }); */

const getUserById = (id) => {
  return Product.findById(id).exec();
};

const getAllData = () => {
  return Product.find({}).exec();
};
console.log(getAllData());

console.log(getUserById("607dd7ff5db6193898e0fd5d"));

module.exports = { connectDB };
