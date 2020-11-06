const express = require('express'),
router = express.Router(),
Product = require('../models/product');

// index route
router.get('/', async(req, res)=>{
    const products = await Product.find({});
    res.render('products/index', {products})
})
// 
module.exports = router;