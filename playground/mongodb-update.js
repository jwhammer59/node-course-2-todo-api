// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
        console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58a90c4a05c5263ab93418ce')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //  Challenge - Update Name & Use "Inc" operator to increment age

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58a66cc0c156b60b4f403533')
    }, {
        $set: {
            name: 'Fred'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
        // db.close();
});