var express  = require('express');
var router   = express.Router();

// Routing

router.route('/saveConfig')
	.post(saveConfigPost)
	.get(saveConfigGet);

module.exports = router;

// Handlers

// GET objects
function saveConfigPost(req,res){
	res.send("ok");
}

function saveConfigGet(req,res){
	res.send("ok");
}