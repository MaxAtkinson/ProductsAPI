var Sequelize = require('sequelize'),
    settings = require('../settings');

// Database connection stuff
var mysql = settings.mysql;
var sq = new Sequelize(mysql.database, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});

// Create tables if they don't exist
// Which they should after running data/migrations
sq.sync();

module.exports = sq;