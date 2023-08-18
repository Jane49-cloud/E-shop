import Product from "./model.js";

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  try {
    res.send({
      success: true,
      message: "Product created successfully..",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "error creating product...",
    });
  }
};
