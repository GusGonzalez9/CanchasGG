const express = require('express')
const router = express.Router()
const usersRouter = require('./users') 
// const productsRouter = require('./products') 
// const categoriessRouter = require('./categories') 

router.use('/users', usersRouter)
// router.use('/products', productsRouter)
// router.use('/categories', categoriessRouter)


module.exports = router