var express = require('express'),
    Product = require('../models/Product');

var ProductsController = express.Router();

ProductsController.get('/', (req, res, next) => {
	Product.findAll().then((products) => {
		res.json(products);
	});
});

ProductsController.post('/', (req, res, next) => {
    var productData = req.body;

    Product.create(productData).then(() => {
    	res.json({'msg': 'Product added.'});
    });
});

ProductsController.delete('/:id', (req, res, next) => {
	var query = {
		where: { id: req.params.id }
	};

    Product.destroy(query).then(() => {
    	res.json({'msg': 'Product Deleted.'});
    });
});

module.exports = ProductsController;