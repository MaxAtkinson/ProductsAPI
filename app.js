var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    ProductsController = require('./controllers/ProductsController'),
    CategoriesController = require('./controllers/ProductsController');

app.set('port', 5000);
app.set('ip', '127.0.0.1');

app.use(bodyParser.json());
app.use('/products', ProductsController);
app.use('/categories', CategoriesController);

app.listen(app.get('port'), app.get('ip'), function() {
    console.log('Listening on ' + app.get('ip') + ':' + app.get('port'));
});