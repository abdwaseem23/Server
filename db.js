const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/lsh";

const connection = MongoClient.connect(url);
module.exports = connection;