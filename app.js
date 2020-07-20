const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var URL = require('url').URL;

const user= require('./routes/user.route');
const uploadCase = require('./routes/uploadcase.route');
// const makeDonation = require('./routes/makedonation.route');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//setup mongoose connection 
const mongoose = require('mongoose');
let dev_db_url ='mongodb://localhost:27017/lsh';
let mongodb = process.env.mongodb_uri || dev_db_url;
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connetion error:'));

// MongoClient.connect(url).then((client) => {    
// }

// )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// function auth (req, res, next) {
//     console.log(req.headers);
//     var authHeader = req.headers.authorization;
//     if (!authHeader) {
//         var err = new Error('You are not authenticated!');
//         res.setHeader('WWW-Authenticate', 'Basic');
//         err.status = 401;
//         next(err);
//         return;
//     }
  
//     var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
//     var user = auth[0];
//     var pass = auth[1];
//     if (user == 'admin' && pass == 'password') {
//         next(); // authorized
//     } else {
//         var err = new Error('You are not authenticated!');
//         res.setHeader('WWW-Authenticate', 'Basic');      
//         err.status = 401;
//         next(err);
//     }
//   }
  
//   app.use(auth);
//   app.use('/ChatThread', chatThread);
    // app.use('/MakeDonation', makeDonation),
    // app.use('/UploadCase', uploadCase)
    // app.use('/', Routes);
app.use('/User', user);
app.use('/UploadCase', uploadCase);
// app.use('/MakeDonation', makeDonation);
let port = 3000
app.listen(port, () => { 
    console.log('Server is up and running on port number' + port);
    console.log('Database Connected correctly to server');
});
