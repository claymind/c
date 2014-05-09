'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

    // Server API Routes
    app.get('/api/awesomeThings', api.awesomeThings);

    app.get('/partials/*', index.partials);

    app.get('/aboutus', index.aboutus);
    app.get('/portfolio', index.portfolio);
    app.get('/services', index.services);
    app.get('/news', index.news);
    app.get('/contactus', index.contactus);
    app.get('/*', index.index);
};