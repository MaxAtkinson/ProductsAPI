var express = require('express'),
    Product = require('../models/Product');

var ProductsController = express.Router();

ProductsController.get('/', (req, res, next) => {
	Product.findOne({}).then((product) => {
		res.json(product);
	});
});

ProductsController.post('/', (req, res, next) => {
    res.json({});
});

ProductsController.delete('/:id', (req, res, next) => {
    res.json({});
});

module.exports = ProductsController;