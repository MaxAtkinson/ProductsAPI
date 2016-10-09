var fs = require('fs'),
    sq = require('./models/db'),
    Product = require('./models/Product'),
    Category = require('./models/Category');

sq.sync({ force: true }).then( () => {
	var categoryData = fs.readFileSync('./data/categories.json', 'utf8');
	var categories = JSON.parse(categoryData);
	Category.bulkCreate(categories);

	var productData = fs.readFileSync('./data/products.json', 'utf8');
	var products = JSON.parse(productData);
	Product.bulkCreate(products);
});