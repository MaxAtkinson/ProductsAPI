var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    ProductsController = require('./controllers/ProductsController'),
    CategoriesController = require('./controllers/CategoriesController');

// Listen here
app.set('port', 5000);
app.set('ip', '127.0.0.1');

// Body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Init app with controllers
app.use('/products', ProductsController);
app.use('/categories', CategoriesController);

// Start
app.listen(app.get('port'), app.get('ip'), function() {
    console.log('Listening on ' + app.get('ip') + ':' + app.get('port'));
});