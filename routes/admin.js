const express = require('express');

const router = express.Router(); //mini express app

//GET
router.get('/add-pet', (req, res, next) => {
  res.send(
    '<form action="/pet-profile" method="POST"><input type="text" name="name"><button type="submit">Add Pet</button></form>'
  );
});

//POST
router.post('/pet-profile', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
