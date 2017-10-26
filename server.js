var methodOverride = require('method-override');
var exphbs = require('express-handlebars')
var db = require('./models');
var express = require('express');
var app = express();
var port = 3001;
require('./controllers/routes.js')(app);


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

console.log('Musicians Web up and running. ')


db.sequelize.sync({ force: true }).then(function(){
  app.listen(port, ()=> {
    console.log('App listening on port ' + port);
  });
});
