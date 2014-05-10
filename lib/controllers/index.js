'use strict';

var path = require('path');

/**
 * Send partial, or 404 if it doesn't exist
 */
exports.partials = function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  res.render(requestedView, function(err, html) {
    if(err) {
      res.send(404);
    } else {
      res.send(html);
    }
  });
};


exports.index = function(req, res) {
    res.render('index', {'name' : 'Guillermo'});
};

exports.aboutus = function(req, res) {
    res.render('aboutus');
};

exports.news = function(req, res) {
    res.render('news');
};


exports.portfolio = function(req, res) {
    res.render('portfolio');
};

exports.services = function(req, res) {
    res.render('services');
};

exports.contactus = function(req, res) {
    res.render('contactus');
};