const express = require('express');
//const { validationResult } = require('express-validator');
const router = express.Router();
let db = require('../models')
const { check, validationResult } = require('express-validator');

//SIGNUP GET ROUTE-create a new user
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

// POST /signup - create a new user
router.post('/signup', (req, res) => 
 db.user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  .then((user => {
    res.redirect('index', `(${user})`) 
  })).catch((err => {
    res.render("index")
    console.log(err)})
  )
);
   
  
//Login Get Route
router.get("/login", (req, res) => {
  res.render("auth/login");
});

//Validation Array to check username and password
let loginValidate = [
  //Check Username
  check('email', 'Username must be an email address').isEmail()
  .trim().escape().normalizeEmail(),
  //Check Password
  check('password').isLength({ min:8 }).withMessage('Password must be at least 8 characters')
  .matches('[0-9]').withMessage('Password must contain a number').matches('[A-Z]').withMessage('Password must contain an Upper Case letter')
  .trim().escape()];

//Login Post route to show login sucess with alert on screen
router.post("/login", loginValidate, (req,res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(422).json({ errors: errors.array()});
}
else {
  let username = req.body.email;
  let password = req.body.password;
  res.render("index",(`Email: ${username} Password: ${password}`));
}console.log(err)});
//res.render("index")
  //console.log(err)});


router.get("/logout", (req,res) => {
  res.render("auth/logout");
});

router.get('/404', (req, res) => {
res.render('404');
});

module.exports = router;