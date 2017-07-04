// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if(err){
        return "Cannot connect to database";
    }

    /* db.collection('Todos').find({_id: new ObjectID('595bee5ab1fd122f55a7d711')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    }); */

    /* db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    }); */
    console.log("Connected");

    db.collection('Users').find({name: 'Hoang'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Nope", err);
    });
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