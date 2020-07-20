const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

let MakeDonationSchema = new Schema({ 
    username: 
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    paymentDate: {type: Date, required: true, max: 25},
    selectedCase: {type: Boolean, required: true, max: 20 },  
    amountOfDonation: {type:Number, required: true, max: 50},
    modeOfDonation: [{
        bankAccount: {type: Boolean, required: true},
        jazzCash: {type: Boolean, required: true,},
        easyPaisa: {type: Boolean, required: true,}
     }],
    cnicNumber: {type:String, required: true, max: 25},
});
module.exports = mongoose.model('MakeDonation', MakeDonationSchema);