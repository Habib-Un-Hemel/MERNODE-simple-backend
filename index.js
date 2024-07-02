const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

//database connected
mongoose
  .connect(
    "mongodb+srv://hemel:abc@backenddb.52am6r6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    //run our server after connecting the database
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })

  .catch(() => {
    console.log("connection failed");
  });

//Node-API? collection name
 






// //Its the brain of our package

// /*
// This code sets up a basic Express.js server in Node.js, which listens on port 3000 for incoming requests. When the server starts, it logs "server is running on port 3000" to the console.

// "Which listens on port 3000 for incoming requests" means that the server is set up to receive and handle network requests directed to port 3000 on the host machine. Any client, such as a web browser or another server, can send HTTP requests to this port, and the server will process and respond to them accordingly.

// An HTTP request is a message sent by a client (like a web browser) to a server asking for some action, such as loading a web page or submitting a form. It's how web browsers and servers communicate to fetch and send data over the internet.

// */
// const express = require("express");
// const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
// const app = express();

// //middleware to avoid the error
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// //response jabe to show "hello from Node API"
// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server ");
// });

// // //to save somethign
// // app.post('/api/products', (req,res)=>{
// //     console.log(req.body);
// //     res.send(req.body);
// // });

// // shei pain for Product and product
// // app.post('/api/products', async (req,res) => {
// //     try {
// //         const Product = await Product.create(req.body);
// //         res.status(200).json(Product);
// //     } catch (error) {
// //         res.status(500).json({message: error.message});
// //     }
// // });

// //get the all lists
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({}); // Use a different variable name here
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //update product api
// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //delete a product
// app.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body); // Use a different variable name here
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

