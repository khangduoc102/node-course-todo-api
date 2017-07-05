// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if(err){
        return "Cannot connect to database";
    }
    console.log("Connected");

    /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('595cdd25b1fd122f55a7e912')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }) */

    db.collection('Users').findOneAndUpdate({
        _id: 123
    }, {
        $set: {
        name : 'isLy',
    },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    db.close(); 
});