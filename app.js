var express = require('express'); //framework name
var path = require('path'); //path to normalize
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser'); //to parse cookies
var bodyParser = require('body-parser'); //parse json

var routes = require('./routes/index');  //brain behind everything
//var users = require('./routes/users');
var about = require('./routes/about');


var app = express();  //like initalizing the app
//way to parse local variables
app.locals.points = "1,821";
//way to pass json data
app.locals.videodata = require('./videodata.json');

//another way to pass json data
//go to index.js file


// view engine setup EJS:- Embedded javascript
app.set('views', path.join(__dirname, 'views')); //how the views are handlled
app.set('view engine', 'ejs');  //we have used ejs ...if we have used jade ..it wud be jade

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes); //only home page
//app.use('/users', users);
app.use('/about', about);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

//why there are two error handlers
//during developemt we need to see indepth
//in production we want to hide those

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
