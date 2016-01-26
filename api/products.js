var express  = require('express'),
  makeRequest = require('./query.js');
var router   = express.Router();

// Routing

router.get('/',fetchProducts);

module.exports = router;


// GET objects
function fetchProducts(req,res) {
  var query = new queryMaker()
    makeRequest(query.products,function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403);
        }
        res.json(rows)
    })
}



function queryMaker() {
    return {
        'products': "Select * from product as prod join product_type as type on prod.product_type_id = type.product_type_id"
    }
}