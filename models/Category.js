var sq = require('./db'),
    Sequelize = require('sequelize');

var Category = sq.define('category', {
    name: {
        type: Sequelize.DataTypes.STRING,
        field: 'name'
    }
});

module.exports = Category;