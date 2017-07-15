const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
/*
{
    email:'hoa'
    pass
    tokens
        access  auth
        token
}       
*/

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    tokens: [{
        access: {
            type:String,
            required:true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

// take _id and email from a user
UserSchema.methods.toJSON= function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

// authentication
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(() => {
        return token;
    });
};

// find user by token generated
UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try{
       decode = jwt.verify(token, 'abc123');
    } catch(e) {
        /* return new Promimse((res, rej) => {
            reject();
        }); */
        return Promise.reject();
    }
    return User.findOne({
       '_id': decode._id,
       'tokens.token': token,
       'tokens.access': 'auth' 
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};