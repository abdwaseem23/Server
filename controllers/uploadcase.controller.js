const UploadCase = require('../models/uploadcase.model');
const mongoose = require('mongoose');
//simple version, without validation or sanitation
exports.test = function (req,res)
{
    res.send('Greetings from the Test controller!');
};

exports.uploadcase_create = function(req,res, next)
{
    console.log(req.body);
    // req.body.album = ""
    let uploadcase = new UploadCase(
        {
          // _id: req.body._id,
            caseDate: req.body.email,
            name: req.body.name,
            contactNumber: req.body.contactNumber,
            cnicNumber: req.body.cnicNumber,
            address: req.body.address,
            zakathAcceptable: req.body.zakathAcceptable,
            sadhakaAcceptable: req.body.sadhakaAcceptable,
            caseDescription: req.body.caseDescription,
            requiredAmount: req.body.requiredAmount
            
        }
    );
    // let db = mongoose.connection;
    // db.user.user_create( { _id: "5d383bca61756c194859c727", children: [ "Album"["Photo"] ] } )
    uploadcase.save(function (err, user)
    {
        if (err)
        {
            console.log(err.message);
            res.send(err.message);
        }
        else {
            let response = {};
            response.data = uploadcase;
            response.status = 200;
            response.message = 'Case Uploaded Successfully';
            console.log(response)
            res.send(response);
            
        }
    })
};

//////
exports.loginUser = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'msg': 'You need to send email and password' });
    }
    User.find({email: req.body.email, password:req.body.password}, function(err, docs,next) {
        docs.forEach(function(response) {
            
          if(response){
            response.data = User;
        response.status = 200;
            response.message = 'Login Successfully';
            console.log(response)
            res.send(response);
            if(err) return next(err);
          }
        else {
            response.status = 404;
            response.message= 'Wrong Credentials.Error login'
            console.log(response)
            res.send(response)
        }
        // res.send(arr);
        if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'msg': 'You need to send email and password' });
    }
})
    })  
};

//controllers/products.controller.js
exports.uploadcase_details = function(req,res, next)
{
    User.findById(req.params.id, function(err,photo)
    {
        if(err) return next(err);
        res.send(photo);
    });
};
exports.uploadcase_update = function(req,res,next)
{
   User.findByIdAndUpdate(req.params.id, {$set: req.body}, 
        function (err, user)
        {
            if(err) return next(err);
            res.send('User Updated.');
        });
};
exports.uploadcase_delete = function(req,res,next)
{
    User.findByIdAndRemove(req.params.id, function(err)
    {
        if(err) return next(err);
        res.send('User deleted successfully');
    })
};
exports.uploadcase_all = function(req,res)
{
    User.find({}, function(err, docs,next) {
        if(err) return next(err);
        let arr = [];
        docs.forEach(function(rec, doc) {
          if(doc) {
            console.log(rec);
            arr.push(rec);
          }
        });
        res.send(arr);
    })
};
