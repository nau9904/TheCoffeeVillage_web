'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3300;

// change

// Morgan
// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

// Rendering engine setup
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// Routes
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/new', function (req, res) {
    res.render('new');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
