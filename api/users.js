
var express  = require('express'),
	makeRequest = require('./query.js');
var router   = express.Router();

// Routing

router.get('/',fetchUsers);
router.get('/:id', fetchOneUser);
router.post('/:id', updateUser);
router.post('/', createUser);

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
    })
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
    })
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
    console.log('updateUser');
}



function queryMaker() {
    return {
        fetchUsers: "Select * from user",
        fetchOneUser : function (id){
            return "Select * from user where user_id = " + id;
        },
        createUser : function (data){
            return "Insert into user(firstName, lastName, balance, is_foysteamer, promo) values ("
                + '"' + data.firstName + '", '
                + '"' + data.lastName + '", '
                + '"' + data.balance + '", '
                + '"' + data.isFoysteamer + '", '
                + '"' + data.promo + '")';
        }
    }
}