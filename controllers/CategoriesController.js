var express = require('express'),
    Category = require('../models/Category'),
    Products = require('../models/Product');

var CategoriesController = express.Router();

CategoriesController.get('/', (req, res, next) => {
	Category.findAll().then((categories) => {
		res.json(categories);
	});
});

CategoriesController.get('/:id/products', (req, res, next) => {
	var query = {
		where: { id: req.params.id }
	};

    Product.find(query).then((products) => {
    	res.json(products);
    });
});

CategoriesController.post('/', (req, res, next) => {
    res.json({});
});

module.exports = CategoriesController;