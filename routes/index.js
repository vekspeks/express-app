var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let user = false;
  if (req.userEmail){
    user = req.userEmail
  }

  res.render('index', {title: 'Moja prva Express aplikacija.', name : user});
});

module.exports = router;
