var sq = require('./db'),
    Sequelize = require('sequelize');

var Category = sq.define('category', {
	name: {
		type: Sequelize.DataTypes.STRING,
		field: 'name',
		primaryKey: true
	}
});

module.exports = Category;