const express = require('express'),
app = express(),
path = require('path'),
mongoose = require('mongoose')
// import routes
const productRoute = require('./routes/products');
// mongoose connection
mongoose.connect('mongodb://localhost:27017/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('database connection successful'))
.catch((err) => console.log(err));

//express configs
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'))
// routes
app.get('/', (req, res)=>{
    res.send('node index route')
})
// routes
app.use('/products', productRoute);
// create listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Product server listening on port ${PORT}...`))