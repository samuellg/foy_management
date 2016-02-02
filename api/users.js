
var express  = require('express'),
	makeRequest = require('./query.js');
var router   = express.Router();

// Routing

router.get('/',fetchUsers);
router.get('/:id', fetchOneUser);
router.post('/:id', updateUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;

// Handlers

// GET objects
function fetchUsers(req,res) {
	var query = new queryMaker()
    makeRequest(query.fetchUsers,function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403).end();
        }
        res.json(rows)
    });
}

function fetchOneUser(req,res) {
    var query = new queryMaker();
    id = req.params.id;
    makeRequest(query.fetchOneUser(id),function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403).end();
        }
        res.json(rows)
    });
}


function createUser(req, res) {
    var data = req.body;
    var query = new queryMaker();
    console.log(query.createUser(data));
    makeRequest(query.createUser(data), function(err,rows,fields) {
            if(err) {
            handleError();
            res.status(403).end();
        }
        res.status(200).end();
    });
}

function updateUser(req, res) {
    var data = req.body;
    console.log('Data : ');
    console.log(data);
    // user id
    id = req.params.id;
    var query = new queryMaker();
    console.log(query.updateUser(id, data));
    makeRequest(query.updateUser(id, data), function(err,rows,fields) {
            if(err) {
            handleError();
            res.status(403).end();
        }
        res.status(200).end();
    });
}

function deleteUser(req, res) {
    var query = new queryMaker();
    id = req.params.id;
    makeRequest(query.deleteUser(id),function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403).end();
        }
        res.json(rows)
    });
}


/**
* Provides all required query for users resource
*/
function queryMaker() {
    return {
        fetchUsers: "Select * from user",
        fetchOneUser : function (id){
            return "Select * from user where userId = " + id;
        },
        createUser : function (data){
            return "Insert into user(firstName, lastName, balance, isFoysteamer, promo) values ("
                + '"' + data.firstName + '", '
                + '"' + data.lastName + '", '
                + '"' + data.balance + '", '
                + '"' + data.isFoysteamer + '", '
                + '"' + data.promo + '")';
        },
        deleteUser : function (id){
            return "Delete from user where userId = " + id;
        },
        updateUser : function(id, data){
            return "update user "
                + 'set firstName = "' + data.firstName + '", '
                + 'lastName = "' + data.lastName + '", '
                +  'promo = "' + data.promotion + '", '
                +  'isFoysteamer = ' + data.isFoysteamer + ', '
                +  'balance = ' + data.balance + ' '
                + 'where userId = ' + id;
        }
    }
}