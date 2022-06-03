const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-pet', (req, res, next) => {
  res.send(
    '<form action="add-profile" method="POST"><input type="text" name="name"><button type="submit">Add Pet</button></form>'
  );
});

app.post('/pet-profile', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Home Page</h1>');
});

app.listen(3000);
