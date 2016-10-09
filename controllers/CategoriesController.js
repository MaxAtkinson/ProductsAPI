var express = require('express'),
    Category = require('../models/Category'),
    Product = require('../models/Product');

// Init new router
var CategoriesController = express.Router();

// GET all categories
CategoriesController.get('/', (req, res, next) => {
    Category.findAll().then((categories) => {
        res.json(categories);
    });
});

// GET all products for a specific category
CategoriesController.get('/:id/products', (req, res, next) => {
    var query = {
        where: { categoryId: req.params.id }
    };

    Product.find(query).then((products) => {
        res.json(products);
    });
});

// POST a new category
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