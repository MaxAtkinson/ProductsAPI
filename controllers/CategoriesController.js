var express = require('express');

var CategoriesController = express.Router();

CategoriesController.get('/', (req, res, next) => {
    res.json({});
});

CategoriesController.get('/:id/products', (req, res, next) => {
    res.json({});
});

CategoriesController.post('/', (req, res, next) => {
    res.json({});
});

module.exports = CategoriesController;