const express = require("express");
const router = express.Router();

const {
    getCategories,
    addCategory,
    deleteCategory,
    getSingleCategory,
    updateCategory
} = require('./controllers/categories-controllers')

router.get("/", getCategories);
router.post("/", addCategory);
router.get("/:id", getSingleCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
