
var express  = require('express'),
	makeRequest = require('./query.js');
var router   = express.Router();

// Routing

router.get('/',fetchUsers);

module.exports = router;

// Handlers

// GET objects
function fetchUsers(req,res) {
	var query = new queryMaker()
    makeRequest(query.users,function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403);
        }
        res.json(rows)
    })
}



function queryMaker() {
    return {
        'users': "Select * from user"
    }
}