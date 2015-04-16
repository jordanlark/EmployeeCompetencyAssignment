var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Awesome App' });
});

router.post('/api', function(req, res, next){
  res.json({
    username: req.body.username,
    email: req.body.email
  });
});

// router.get('/commits'), function(req, res){
//   'use strict';
    // res.render('commits', {title: 'Pretty-ified Commits'})
// }

router.get('/commitData', function(req, res){
  request.get("https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=jordanlark")
    .end(function(err, response){
      // res.json(response);
      res.render('commits', {title: 'Pretty-ified Commits'})

    })
});

module.exports = router;
