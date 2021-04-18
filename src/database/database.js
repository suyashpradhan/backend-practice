var mongoose = require("mongodb");
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://tanaypratap:<your-password-here>@neog-cluster.wfxlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // connecting to server
    await client.connect();
    const database = client.db("inventory"); // selecting DB
    const products = database.collection("products"); // selecting the collection

    // Add a document to products
    const newProduct = { name: "japani joota", price: 1500 };
    const result = await products.insertOne(newProduct);
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );

    // Query for a product that has the name 'japani joota'
    const query = { name: "japani joota" };
    const product = await products.findOne(query);
    console.log("found one", product);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
