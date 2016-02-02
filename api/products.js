var express  = require('express'),
  makeRequest = require('./query.js');
var router   = express.Router();

// Routing

router.get('/',fetchProducts);
// router.get('/:id', fetchOneProduct);
// router.post('/:id', updateProduct);
// router.post('/', createProduct);
// router.delete('/:id', deleteProduct);

module.exports = router;


// GET objects
function fetchProducts(req,res) {
  var query = new queryMaker()
    makeRequest(query.fetchProducts,function(err,rows,fields) {
        if(err) {
            handleError();
            res.status(403);
        }
        res.json(rows)
    })
}



function queryMaker() {
    return {
        'fetchProducts': "Select * from product as prod join product_type as type on prod.productTypeId = type.productTypeId",
        fetchOneProduct : function(id){
            return "Select * from product as prod join product_type as "
            + "type on prod.productTypeId = type.productTypeId where productId = " + id;
        },
        createProduct : function(data){
            // à compléter
        }
    }
}

/**
* Provides all required query for users resource
*/
/*function queryMaker() {
    return {
        fetchUsers: "Select * from user",
        fetchOneUser : function (id){
            return "Select * from product as prod join productType as "
           + "type on prod.productTypeId = type.productTypeId where productId = " + id;
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
    }
}*/