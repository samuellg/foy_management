var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'motDEpasseAchanger',
  database : 'foy_management'
});
module.exports = connection;
