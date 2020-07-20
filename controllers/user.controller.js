const User = require('../models/user.model');
const mongoose = require('mongoose');
//simple version, without validation or sanitation
exports.test = function (req,res)
{
    res.send('Greetings from the Test controller!');
};

exports.user_create = function(req,res, next)
{
    console.log(req.body);
    // req.body.album = ""
    let user = new User(
        {
          // _id: req.body._id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            contactNumber: req.body.contactNumber,
            
        }
    );
    // let db = mongoose.connection;
    // db.user.user_create( { _id: "5d383bca61756c194859c727", children: [ "Album"["Photo"] ] } )
    user.save(function (err, user)
    {
        if (err)
        {
            console.log(err.message);
            res.send(err.message);
        }
        else {
            let response = {};
            response.data = user;
            response.status = 200;
            response.message = 'User Created Successfully';
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

    // User.findOne({ email: req.body.email }, (err, user) => {
    //     if (err) {
    //         return res.status(400).send({ 'msg': err });
    //     }
    //     if (!user) {
    //         return res.status(400).json({ 'msg': 'The user does not exist' });
    //     }
    // });

//  User.exists(req.body.password, (err, isMatch) => {
//     if (isMatch && !err) {
//         return res.status(200).json({
//             token: createToken(user)
//         });
//     } else {
//         return res.status(400).json({ msg: 'The email and password don\'t match.' });
//     }
// });

        // User.comparePassword(req.body.password, (err, isMatch) => {
        //     if (isMatch && !err) {
        //         return res.status(200).json({
        //             token: createToken(user)
        //         });
        //     } else {
        //         return res.status(400).json({ msg: 'The email and password don\'t match.' });
        //     }
        // });
   
};
/////////

//controllers/products.controller.js
exports.user_details = function(req,res, next)
{
    User.findById(req.params.id, function(err,photo)
    {
        if(err) return next(err);
        res.send(photo);
    });
};
exports.user_update = function(req,res,next)
{
   User.findByIdAndUpdate(req.params.id, {$set: req.body}, 
        function (err, user)
        {
            if(err) return next(err);
            res.send('User Updated.');
        });
};
exports.user_delete = function(req,res,next)
{
    User.findByIdAndRemove(req.params.id, function(err)
    {
        if(err) return next(err);
        res.send('User deleted successfully');
    })
};
exports.user_all = function(req,res)
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
