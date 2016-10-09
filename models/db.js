var Sequelize = require('sequelize'),
    settings = require('../settings');

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

sq.sync();

module.exports = sq;