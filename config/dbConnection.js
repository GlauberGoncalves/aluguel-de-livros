var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'livrariaonline'
	});
};

module.exports = function () {
	return connMySQL;
};
