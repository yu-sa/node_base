var express = require('express');
var models = require("../models");

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var user_id = req.query.user_id;
  var name = req.query.name;
  models.User.findOrCreate(
    {"where": {"id": user_id}, 
     "defaults": {"id": user_id, "name": name}}
  ).spread(function(user, created){
    res.send({"user": user, "created": created});
  });
});

module.exports = router;
