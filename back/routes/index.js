const express = require("express");
const router = express.Router();
const userRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");

router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
