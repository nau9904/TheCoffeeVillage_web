'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3300;


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

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/menu', function (req, res) {
  res.render('menu');
});

app.get('/store', function (req, res) {
  res.render('store');
});

app.get('/order', function (req, res) {
  res.render('order');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
