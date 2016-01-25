var express  = require('express');
var router   = express.Router();

// Routing

router.get('/',products);
router.get('/count',objectsCount);

module.exports = router;

// Handlers

// GET objects
function products(req,res){
	// Query DB
	var objs = 
	[
  {
    "name": "Tripel Karmeliet",
    "type": "bottle",
    "id": 1,
    "quantity": 15
  },
  {
    "name" : "Queue de charrue",
     "type": "bottle",
     "id": 2,
     "quantity": 88
   },
  {
    "name" : "Pizza",
    "type": "food",
     "id": 3,
     "quantity": 45
  },
  {
    "name" : "Pinte stylée",
     "type": "tapBeer",
     "id": 4,
     "quantity": 456
   },
  {"name" : "Demi stylé",
   "type": "tapBeer",
   "id": 4,
   "quantity": 456}
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