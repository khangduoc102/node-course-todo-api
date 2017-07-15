var mongoose = require('mongoose');

/*
{
    email:'hoa'
    pass
    tokens
        access  auth
        token
}       
*/
var user = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return true
            },
            message: '{VALUE} is not a valid email'
        }
    }
});

module.exports = {user};