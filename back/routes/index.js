const express = require("express");
const router = express.Router();
const userRouter = require("./usersRouter");
const productRouter = require("./productRouter");
const ecomerceRouter = require("./ecomerceRouter");

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/", ecomerceRouter);

module.exports = router;
