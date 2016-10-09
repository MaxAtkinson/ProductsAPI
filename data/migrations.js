var fs = require('fs'),
    sq = require('../models/db'),
    Product = require('../models/Product'),
    Category = require('../models/Category');
    
/*
    To be run from the project root.

    May throw an error due to dropping tables which don't 
    exist due to { force: true } below -- ignore these!
*/

// Drop and create all tables, then...
sq.sync({ force: true }).then( () => {
    // Create the categories and insert them with a bulkCreate
    var categoryData = fs.readFileSync('./data/categories.json', 'utf8');
    var categories = JSON.parse(categoryData);
    Category.bulkCreate(categories);

    // Similarly for products which rely on categories
    var productData = fs.readFileSync('./data/products.json', 'utf8');
    var products = JSON.parse(productData);
    Product.bulkCreate(products);

    console.warn('\n\n\nMigrations script should be run from the root project directory.');
});