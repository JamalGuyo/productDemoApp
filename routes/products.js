const express = require('express'),
router = express.Router(),
Product = require('../models/product');

// index route
router.get('/', async(req, res)=>{
    const products = await Product.find({});
    res.render('products/index', {products})
})
// show route
router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product})
})
// 
module.exports = router;