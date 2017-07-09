const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo.js');
const {user} = require('./../server/models/user.js');
/*
var id = '59628c7729163a15a8d7eaf911';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todos', todo);
}).catch((e) => console.log(e));
*/

var id = '595e9dba861d3519b02851a5'

user.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User', user.email);
}, (e) => console.log(e));