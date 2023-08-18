import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Array,
      default: [],
    },

    images: {
      type: Array,
      default: [],
    },
    stock: {
      type: Number,
      default: 2,
    },

    status: {
      type: String,
      default: "instock",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose("Product", productSchema);

export default Product;
