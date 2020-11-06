const mongoose = require('mongoose');

// product schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    category:{
        type:String,
        enum:['fruit', 'vegetable', 'dairy']
    }
})

module.exports =  mongoose.model('Product', productSchema);
