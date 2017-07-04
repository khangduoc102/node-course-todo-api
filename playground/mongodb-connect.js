// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if(err){
        return "Cannot connect to database";
    }

    console.log("Connected");

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, res) => {
        if(err){
            return console.log('Unable to insert', err);
        }

        console.log(JSON.stringify(res.ops, undefined, 2));

    }); */

    /* db.collection('Users').insertOne({

        name: 'Hoang',
        age: 20,
        location: 'Fin'
    }, (err, res) => {
        if(err){
            return console.log('Cannot cadd User', err);
        }
        console.log(res.ops[0]._id.getTimestamp());
    }); */

    db.close(); 
});