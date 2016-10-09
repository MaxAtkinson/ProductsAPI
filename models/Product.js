var sq = require('./db'),
    Category = require('./Category'),
    Sequelize = require('sequelize');

// Product model with fields 'id', 'name' and 'categoryId'
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

// ORM relationship
Category.hasOne(Product);

module.exports = Product;