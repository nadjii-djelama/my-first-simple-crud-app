const express = require("express");
const Product = require("./models/product.model");
const app = express();
const mongoose = require("mongoose");
const route = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", route);
app.get("/api/products/:id", route);
app.put("/api/products/:id", route);
app.post("/api/products/create", route);
app.delete("/api/products/delete/:id", route)

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});

mongoose
  .connect("mongodb://localhost:27017/testmongoose")
  .then(() => {
    console.log("connected");
    app.listen(4040);
  })
  .catch(() => {
    console.log("connection failed");
  });
