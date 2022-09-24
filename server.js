require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

// console.log(SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/services', (req,res) => {
  res.render('services');
});

app.get('/about', (req,res) => {
  res.render('about');
});

app.get('/portfolio', (req,res) => {
  res.render('portfolio');
});

app.get('/contact', (req,res) => {
  res.render('contact');
});

app.get('/contact/info', (req,res) => {
  res.render('contact/info');
});

app.get('/booking', (req,res) => {
  res.render('booking');
});

app.get('/signup', (req,res) => {
  res.render('signup');
});

app.get('/login', (req,res) => {
  res.render('login');
});

app.get('/logout', (req,res) => {
  res.render('logout');
});

//delete, change, post routes below



const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
