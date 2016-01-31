var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'motDEpasseAchanger',
  database : 'foy_management'
});

connection.connect(function(err) {
            if(err) handleError(err);
});

function handleError(err){
    console.log(err);
}

module.exports = connection;
