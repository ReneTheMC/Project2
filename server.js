require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
//const session = require('express-session');
//const passport = require('passport');
//const connectEnsureLogin = require ('connect-ensure-login');
let db = require('./models')
const bodyParser = require ('body-parser');
//const User = require('./models/user.js'); // User Model

// console.log(SECRET_SESSION);

//Middleware
app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false}));
//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(__dirname + '/public'));
app.use(layouts);



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/services', (req,res) => {
  res.render('services');
});

app.get('/contact/info', (req,res) => {
  res.render('contact');
});

app.get('/booking', (req,res) => {
  res.render('booking');
});

app.get('/signup', (req,res) => {
  res.render('auth/signup');
});

app.get('/login', (req,res) => {
  res.render('auth/login');
});

app.get('/logout', (req,res) => {
  req.logout();
  res.redirect('/login');
});

//delete, change, post routes belo



app.get('/404', (req,res) => {
res.render('404');
});

//app.use((req, res) => {
  //res.status(404).render('404');
//})

app.use('/auth', require('./controllers/auth'))

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
