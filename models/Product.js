var sq = require('./db'),
    Category = require('./Category'),
    Sequelize = require('sequelize');

var Product = sq.define('product', {
	name: {
		type: Sequelize.DataTypes.STRING,
		field: 'name'
	},
	description: {
		type: Sequelize.DataTypes.TEXT,
		field: 'description'
	}
});

Category.hasOne(Product);
module.exports = Product;