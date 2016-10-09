var express = require('express'),
    Category = require('../models/Category'),
    Product = require('../models/Product');

var CategoriesController = express.Router();

CategoriesController.get('/', (req, res, next) => {
	Category.findAll().then((categories) => {
		res.json(categories);
	});
});

CategoriesController.get('/:id/products', (req, res, next) => {
	var query = {
		where: { category: req.params.id }
	};

    Product.find(query).then((products) => {
    	res.json(products);
    });
});

CategoriesController.post('/', (req, res, next) => {
    Category.create(req.body).then((category) =>{
    	res.json({
    		'msg': 'Category created.',
    		'category': category
    	});
    }).catch((err) => {
    	res.status(400);
    	res.json({ 'msg': err.message });
    });
});

module.exports = CategoriesController;