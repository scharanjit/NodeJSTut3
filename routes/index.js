var express = require('express');
var router = express.Router();

// way to parse json data
var vd = require('../videodata.json');  //double dotes means move 1 directory up

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    name:'Charanjit Singh',
    videodata1:vd

  });
});

module.exports = router;
