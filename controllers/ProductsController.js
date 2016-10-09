var express = require('express'),
    Product = require('../models/Product');

// Init new router
var ProductsController = express.Router();

// GET all products
ProductsController.get('/', (req, res, next) => {
    Product.findAll().then((products) => {
        res.json(products);
    });
});

// POST a new product
ProductsController.post('/', (req, res, next) => {
    Product.create(req.body).then((product) => {
        res.json({
            'msg': 'Product added.',
            'product': product
        });
    }).catch((err) => {
        res.status(400);
        res.json({ 'msg': err.message });
    });
});

// DELETE a product
ProductsController.delete('/:id', (req, res, next) => {
    var query = {
        where: { id: req.params.id }
    };

    Product.destroy(query).then(() => {
        res.json({ 'msg': 'Product Deleted.' });
    });
});

module.exports = ProductsController;