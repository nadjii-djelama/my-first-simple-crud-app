const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name!"],
    },
    quantity: {
      type: Number,
      required: [true, "please add a quantity!"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "please add a price!"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
