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
	},
	category: {
		type: Sequelize.DataTypes.STRING,
		field: 'category',
		references: {
			model: Category,
			key: 'name'
		}
	}
});

module.exports = Product;