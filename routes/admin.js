const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router(); //mini express app

//GET
router.get('/add-pet', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//POST
router.post('/add-pet', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
