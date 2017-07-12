var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://hoangle:hoanglp97@ds157112.mlab.com:57112/my-node-course'
};
mongoose.connect( db.mlab || db.localhost);

module.exports = {mongoose};