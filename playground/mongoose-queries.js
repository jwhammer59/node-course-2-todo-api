const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58aba6bd039a93b29ab8e774';

// var id = '58aa68a7a7244b86229c28b411';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid!');
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// Query User collection
// User.findByID 

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));


// Practice typing Todo.findById Structure
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Todo not found!');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find todo');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find todo');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find todo');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find todo');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find todo');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find todo');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find todo');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Unable to find Todo');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));