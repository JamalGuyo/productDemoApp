const mongoose = require('mongoose'),
Product = require('./models/product');

// mongoose connection
mongoose.connect('mongodb://localhost:27017/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('database connection successful'))
.catch((err) => console.log(err));

// add products to db
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
    name: 'Organic Goddesss Melon',
    price: 4.99,
    category: 'fruit' 
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category:'vegetable'

    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category:'dairy'
    },
    {
    name: 'Ruby GrapeFruit',
    price: 1.99,
    category: 'fruit'
    },
]
Product.insertMany(seedProducts);

