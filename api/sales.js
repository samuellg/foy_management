
var express  = require('express'),
	makeRequest = require('./query.js');
var router   = express.Router();

// Routing

router.get('/',fetchSales);
router.get('/:id', fetchOneSale);
// See if this operation should be authorised...
//router.post('/:id', updateSale);
router.post('/', createSale);
// Must add update of user account
//router.delete('/:id', deleteSale);

module.exports = router;

// Handlers

// GET objects
function fetchSales(req,res) {
	var query = new queryMaker()
    makeRequest(query.fetchSales,function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403).end();
        }
        res.json(rows)
    })
}

function fetchOneSale(req,res) {
    var query = new queryMaker();
    id = req.params.id;
    makeRequest(query.fetchOneSale(id),function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403).end();
        }
        res.json(rows)
    })
}


function createSale(req, res) {
    var data = req.body;
    var query = new queryMaker();
    console.log(data);
    makeRequest(query.createSale(data), function(err,rows,fields) {
            if(err) {
            handleError();
            res.status(403).end();
        }
        res.status(200).end();
    });
}

function updateSale(req, res) {
    console.log('updateSale');
}

function deleteSale(req, res) {
    var query = new queryMaker();
    id = req.params.id;
    makeRequest(query.deleteSale(id),function(err,rows,fields) {
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
        fetchSales: "Select * from sale",
        fetchOneSale : function (id){
            return "Select * from sale where saleId = " + id;
        },
        createSale : function (data){
            return "Insert into sale(userId, productId) values ("
                + '"' + data.userId + '", '
                + '"' + data.productId + '")';
        },
        deleteSale : function (id){
            return "Delete from sale where saleId = " + id;
        },
        updateSale : function(id, data){
            "update sale"
                + 'set userId = "' + data.userId + '", '
                + 'productId = "' + data.productId + '", '
                + 'where saleId = "' + id + '"';
        }
    }
}