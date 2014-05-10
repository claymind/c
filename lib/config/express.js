'use strict';

var path = require('path'),
    join = path.join,
    root = join(__dirname, '../../'),
    express = require('express'),
    config = require('./config'),
    swig = require('swig');

/**
 * Express configuration
 */
module.exports = function(app) {
    if (process.env.NODE_ENV === 'development') {
        app.use(require('connect-livereload')());

        // Disable caching of scripts for easier testing
        app.use(function noCache(req, res, next) {
            if (req.url.indexOf('/scripts/') === 0) {
                res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
                res.header('Pragma', 'no-cache');
                res.header('Expires', 0);
            }
            next();
        });

        app.use(express.static(path.join(config.root, '.tmp')));
        app.use(express.static(path.join(config.root, 'app')));
        //app.use(express.errorHandler());
        app.set('views', config.root + '/app/views');
    }

    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'qa'){
        app.use(express.static(path.join(config.root, 'app')));
        app.set('views', path.join(config.root, '/app/views'));
    }

    // This is where all the magic happens!
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');

    // Swig will cache templates for you, but you can disable
    // that and use Express's caching instead, if you like:
    app.set('view cache', false);
    // To disable Swig's cache, do the following:
    swig.setDefaults({ cache: false, varControls : ['<%=', '%>'] });
};
