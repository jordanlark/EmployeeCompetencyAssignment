var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Awesome App' });
});

router.post('/api', function(req, res, next){
  res.json({
    username: req.body.username,
    email: req.body.email
  })
});

module.exports = router;
