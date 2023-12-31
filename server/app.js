var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var teamsRouter = require('./routes/teams.js');
var standingsRouter = require('./routes/standings.js');
var fixtureRouter = require('./routes/fixture.js');

var app = express();

app.use(
  cors({
    origin: "*"
  })
)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/teams', teamsRouter);
app.use('/standings', standingsRouter);
app.use('/fixture', fixtureRouter);


module.exports = app;
