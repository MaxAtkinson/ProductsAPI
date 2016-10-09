var sq = require('./db'),
    Sequelize = require('sequelize');

// Category model with fields 'id' and 'name'
var Category = sq.define('category', {
    name: {
        type: Sequelize.DataTypes.STRING,
        field: 'name'
    }
});

module.exports = Category;