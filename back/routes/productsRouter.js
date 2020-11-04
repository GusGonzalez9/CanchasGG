const express = require("express");
const router = express.Router();
const {getProducts, getSingleProduct, addSingleProduct, addComment, addRate, userValidation} = require('./controllers/products-controllers')

router.get("/", getProducts);
router.post("/", addSingleProduct);

router.post("/:id/comments", userValidation, addComment);
router.post("/:id/rates", userValidation, addRate);
router.get("/:id", getSingleProduct);

module.exports = router;
