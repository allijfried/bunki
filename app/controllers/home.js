var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');
  bodyParser = require('body-parser');

var exprApp = express();
exprApp.use(bodyParser.json());

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/quiz', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('quiz', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.post('/success', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    formData = req.body;
    res.render('success', formData);
  });
});

function t_or_f(req) {
  if (req == 'true') {
    return true;
  } else {
    return false;
  }
}



