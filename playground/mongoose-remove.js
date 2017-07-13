const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo.js');
const {user} = require('./../server/models/user.js');

/* Todo.remove({}).then((result) => {
    console.log(result);
}); */

//Todo.findOneAndRemove({})

/*Todo.findOneAndRemove({
    _id: ''
}).then((todo) => {
    console.log(todo);
}) */

//Todo.findByIDAnd Remove

Todo.findByIdAndRemove('5967ef7d734d1d59f325c0d6').then((todo) => {
    console.log(todo);
});