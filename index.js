const express = require('express'),
app = express(),
path = require('path'),
mongoose = require('mongoose')

//express configs
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'))
// routes
app.get('/', (req, res)=>{
    res.send('node index route')
})
// create listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Product server listening on port ${PORT}...`))