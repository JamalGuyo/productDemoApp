const express = require('express'),
router = express.Router(),
Product = require('../models/product');

// index route
router.get('/', async(req, res)=>{
    const products = await Product.find({});
    res.render('products/index', {products})
})

// new route
router.get('/new', (req,res) => {
    res.render('products/new');
})

// create route
router.post('/', async(req, res)=>{
    const product = await Product.create(req.body);
    res.redirect(`/products/${product._id}`)
})


// show route
router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product})
})

// edit route
router.get('/:id/edit', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit',{product});
})

// 
module.exports = router;