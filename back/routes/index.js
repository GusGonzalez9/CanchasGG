const express = require("express");
const router = express.Router();
const userRouter = require("./usersRouter");
const productRouter = require("./productRouter");
const categoriesRouter = require("./categoriesRouter");

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
