var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var morgan = require('morgan');
var path = require('path');
module.exports = function(app) {
// morgan

app.use(morgan('dev'));

// boilerplate bodyParser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: true
  }));

app.get('/', (req,res)=>{
  res.render('index');
});

app.get('/artist', (req,res)=>{
  res.render('artist');
});

app.get('/venue', (req,res)=>{
  res.render('venue');
});

app.get('/addartist',(req,res)=>{
  res.render('addartist');
});

app.get('/addvenue', (req,res)=>{
  res.render('addvenue');
});

app.get('/map',(req,res)=>{
  res.sendFile(__dirname, '../', 'map.html');
})
};
