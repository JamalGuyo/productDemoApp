const express = require('express'),
app = express(),
path = require('path'),
mongoose = require('mongoose'),
methodOverride = require('method-override');
// import routes
const productRoute = require('./routes/products');
// mongoose connection
mongoose.connect('mongodb://localhost:27017/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('database connection successful'))
.catch((err) => console.log(err));

//express configs
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
// routes
app.get('/', (req, res)=>{
    res.redirect('/products')
})
// routes
app.use('/products', productRoute);
// wild card route
app.get('*', (req, res) => {
    res.send('404: Page Not Found :(')
})
// create listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Product server listening on port ${PORT}...`))