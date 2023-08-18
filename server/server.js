import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { createProduct } from "./products/handlers.js";

// file imports
import connection from "./database/index.js";
import cloudinary from "./config/cloudinary.js";

dotenv.config();

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = () => {
  multer({ storage: storage }.single("file"));
  async (req, res) => {
    let result;
    try {
      result = await cloudinary.uploader.upload(req.file.path, {
        folder: "E-shop",
      });
    } catch (error) {}
  };
};

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server listening on port ${port}...`));
connection();
