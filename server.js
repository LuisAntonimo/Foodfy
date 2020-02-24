const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = require('./js/data.js');

server.use(
  express.static('styles'),
  express.static('assets'),
  express.static('js')
);

server.set('view engine', 'njk');

nunjucks.configure('src', {
  express: server
});

// ROUTES

server.get('/', function(req, res) {
  return res.render('index', { recipes });
});

server.get('/about', function(req, res) {
  return res.render('about');
});

server.get('/recipes', function(req, res) {
  return res.render('recipes', { recipes });
});

server.get('/recipes/:index', function(req, res) {
  const recipeIndex = req.params.index;

  const recipe = recipes.find(function(recipe) {
    if (recipe.id == recipeIndex) {
      return true;
    }
  });

  if (!recipe) {
    return res.send('not found');
  } else {
    return res.render('info', { recipe });
  }
});

//

server.listen(3333, function() {
  console.log('server is running ✅ ');
});
