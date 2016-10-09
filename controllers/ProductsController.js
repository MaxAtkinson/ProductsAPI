var express = require('express'),
    Product = require('../models/Product');

var ProductsController = express.Router();

ProductsController.get('/', (req, res, next) => {
	Product.findAll().then((products) => {
		res.json(products);
	});
});

ProductsController.post('/', (req, res, next) => {
    Product.create(req.body).then(() => {
    	res.json({ 'msg': 'Product added.' });
    }).catch((err) => {
    	res.status(400);
    	res.json({ 'msg': err.message });
    });
});

ProductsController.delete('/:id', (req, res, next) => {
	var query = {
		where: { id: req.params.id }
	};

    Product.destroy(query).then(() => {
    	res.json({ 'msg': 'Product Deleted.' });
    });
});

module.exports = ProductsController;