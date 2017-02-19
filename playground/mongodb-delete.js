// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
        console.log('Connected to MongoDB Server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // Challenge Part 1 - Remove multiples
    // db.collection('Users').deleteMany({name: 'Gavin'}).then((result) => {
    //     console.log(result);
    // });
    // Challenge Part 2 - Remove "Mike" using ObjectID
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('58a66ea5d7970a0b8b3e5eea')
    }).then((result) => {
        console.log(result);
    });
        // db.close();
});