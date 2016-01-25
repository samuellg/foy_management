var express = require('express');
var router  = express.Router();

// Routing

router.get('/',index);

module.exports = router;

// Render index.html
function index(req, res){
    res.render('index');
}