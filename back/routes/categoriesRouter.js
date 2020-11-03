const express = require("express");
const router = express.Router();

const {getCategories, addCategory, deleteCategory, getCategory} = require('./controllers/categories-controllers')

router.get("/", getCategories);
router.post("/", addCategory);
router.get("/:id", getCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
