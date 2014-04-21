'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    contacts = require('./controllers/contacts'),
    messages = require('./controllers/messages');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);
  app.get('/api/users',users.all);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  //Routes for Contacts
  app.get('/api/contacts',contacts.allContacts);
  app.del('/api/contacts/:id',contacts.remove);
  app.post('/api/contacts',contacts.create);

  //Routes for Messages
  app.get('/api/messages',messages.allMessages);
  app.del('/api/messages/:id',messages.remove);
  app.post('/api/messages',messages.create);


  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};