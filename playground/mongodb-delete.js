// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if(err){
        return "Cannot connect to database";
    }

    console.log("Connected");

    // deleteMany
    //db.collection('Todos').deleteMany({text : "Walk the cat"}).then((result) => {
    //    console.log(result);
    //});

    // deleteOne
    //db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //    console.log(res);
    //})

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
        console.log(res);
    })
    

    db.close(); 
});