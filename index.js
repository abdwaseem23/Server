var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user.route');
var makeDonationRouter = require('./routes/uploadcase.route');
var uploadCaseRouter = require('./routes/uploadcase.route')
var cors = require('cors')
// var app = express();

var corsOptions = {
  origin: 'http://localhost:8100',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


// Enable preflight requests for all routes
// app.options('*', cors(corsOptions));

// app.get('/', cors(corsOptions), (req, res, next) => {
//   res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
// })

// app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 3000')
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/uploadcases', uploadCaseRouter);
app.use('/makedonations', makeDonationRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
//   res.render('error');
});

module.exports = app;
