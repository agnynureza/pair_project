const express = require('express')
const router = express.Router()

//home
//signup
//.......
//signin
//.................
router.get('/', function (req, res) {
    res.render('index');
  });

  module.exports = router