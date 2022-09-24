const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.render("home");
});

router.get('/ ', (req, res) => {
    res.render('');
  });
  
  router.get('/animals', (req, res) => {
    res.render('faves/animals');
  });

  module.exports = router;