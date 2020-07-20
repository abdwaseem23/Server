const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

let UploadCaseSchema = new Schema({ 
    username: 
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },
    caseDate: {type: Date, required: true, max: 25},
    name: {type: String, required: true, max: 20 },  
    contactNumber: {type:String, required: true, max: 15},
    cnicNumber: {type:String, required: true, max: 25},
    address: {type:String, required: true, max: 100},
    zakathAcceptable: {type:Boolean, required: true},
    sadhakaAcceptable: {type:Boolean, required: true},
    caseDescription: {type:String, required: true, max: 500},
    requiredAmount: {type:String, required: true, max: 50},
});
module.exports = mongoose.model('UploadCase', UploadCaseSchema);