const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

let UserSchema = new Schema({ 

    username: {type: String, required: true, max: 20 }, 
    email: {type: String, required: true, max: 30 }, 
    password: {type: String, required: true, max: 30 }, 
    contactNumber: {type:String, required: true}
});
module.exports = mongoose.model('User', UserSchema);