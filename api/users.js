
var express  = require('express');
var router   = express.Router();

// Routing

router.get('/',users);
router.get('/count',objectsCount);

module.exports = router;

// Handlers

// GET objects
function users(req,res){
	// Query DB
	var objs = 
	[
	{
		"firstName": "Sam",
		"lastName": "lg",
		"balance": 10
	},
	{
		"firstName" : "Lina",
		"lastName" : "Lau",
		"balance": 15
	}
	];
	// Render JSON
	res.json(objs);
}

// GET objects count
function objectsCount(req,res){
		// Query DB
		var objs = [
			{
				id : 1,
				custom : 'attribute'
			},
			{
				id : 1,
				custom : 'attribute'
			}
		];
		var count = objs.length;
		// Render JSON
		res.json({count:count});
}