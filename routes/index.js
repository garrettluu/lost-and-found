var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/student/query', function(req, res, next) {
  //handle student query request
});


router.get('/staff/item/in', function(req, res, next) {
  //handle staff entering in new item
});

router.get('/staff/item/out', function(req, res, next) {
  //handle staff removing an item
});

router.get('/staff/item/update', function(req, res, next) {
  //handle staff updating an item
  
});

module.exports = router;
