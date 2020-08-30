
require('./db/config');

const express = require('express'),
  app = express(),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  userRoutes = require('./routes/secure/users'),
  openRoutes = require('./routes/open')
  



// Parse incoming JSON into objects
// This gives us access to the req.body object
app.use(express.json());
app.use(openRoutes);

// route for parks end point
app.use('/api/v1/parks', require('./routes/parks'));

// This middleware gives us access to the request.cookies object
app.use(cookieParser());

// Authenticate user loged in
app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

// This middleware gives us access to the req.files object
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.use(userRoutes);

module.exports = app;
