const express = require("express");
const router = express.Router();
const {getProducts, getSingleProduct, addSingleProduct, deleteSingleProduct, addComment, addRate, userValidation, adminValidation} = require('./controllers/products-controllers')

router.get("/", getProducts);
router.post("/", /*adminValidation,*/ addSingleProduct);
router.delete("/:id", /*adminValidation,*/ deleteSingleProduct);

router.post("/:id/comments", /*userValidation,*/ addComment);
router.post("/:id/rates", /*userValidation,*/ addRate);
router.get("/:id", getSingleProduct);

module.exports = router;
