var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var morgan = require('morgan');
var path = require('path');
var db = require('../models');

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
  db.artist.findAll({}).then((artist)=>{
    res.render('artistview',{artist});
  })
});

app.get('/gigs', (req,res)=>{
  db.gig.findAll({}).then((gig)=>{
    res.render('gigview', {gig});
  })
});

app.get('/addartist',(req,res)=>{
    res.render('addartist');

});
app.post('/artist',(req,res)=>{
  db.artist.create(req.body).then((data)=>{
    console.log('success'+JSON.stringify(data));
    res.redirect('/artist');
  });
});


app.get('/addgig', (req,res)=>{
  res.render('addgig');
});

app.post('/gigs',(req,res)=>{
    db.gig.create(req.body).then((data)=>{
      console.log('data'+data);
      res.redirect('/gigs');
    });
});

app.get('/map',(req,res)=>{
  res.sendFile(__dirname, '../', 'map.html');
})


app.get('/messages',(req,res)=>{
  db.message.findAll({}).then((messages)=>{
  if (messages){
    res.json(messages);
  }
  else{
    res.send('No messages found.')
  }
  })
})

app.post('/messages',(req,res)=>{
  db.message.create(req.body).then((data)=>{
    console.log('Message successfully posted');
    res.redirect('/messages');
  })
  // res.send('message sent. Redirecting...');
})
// end of  module.exports
};
