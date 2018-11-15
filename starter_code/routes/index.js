const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then( allMovies => {
    res.render('movies',{allMovies});
  })
  .catch(err=> console.log(err))


});

module.exports = router;
