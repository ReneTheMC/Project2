require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const methodOverride = require('method-override');
const db = require('./models');

const SECRET_SESSION = process.env.SECRET_SESSION;


//Middleware
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', require('./controllers/auth'));

app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});

app.get('/profile/edit', isLoggedIn, (req, res) => {
  res.render('edit');
});

app.put('/profile/:id', isLoggedIn, async (req, res) => {
  try {
      const foundUser = await db.user.findOne({ where: { email: req.body.email }});
      if (foundUser.email && foundUser.id !== req.user.id) {
        req.flash('error', 'Email already exists. Please try again.');
        res.redirect('/profile');
      } else {
        const usersUpdated = await db.user.update({
          email: req.body.email,
          name: req.body.name
        }, {
          where: {
            id: req.params.id
          }
        });

        console.log('********** PUT ROUTE *************');
        console.log('Users updated', usersUpdated);
        console.log('**************************************************');
  
        // redirect back to the profile page
        res.redirect('/profile'); // route
      }
  } catch (error) {
    console.log('*********************ERROR***********************');
    console.log(error);
    console.log('**************************************************');
    res.render('edit');
  }
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

app.put('/putBooking', (req, res) => {
  res.redirect('/booking');
});

app.delete('/deleteBooking', (req, res) => {
  res.redirect('/booking');
});
//delete, change, post routes belo

app.get('/404', (req,res) => {
res.render('404');
});

//app.use((req, res) => {
  //res.status(404).render('404');
//})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`???? You're listening to the smooth sounds of port ${PORT} ????`);
});


module.exports = passport;
module.exports = isLoggedIn;
module.exports = server;

