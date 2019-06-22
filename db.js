'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tshirtshop'
});


module.exports = connection;