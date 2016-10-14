var mongoose = require('mongoose');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');




// mongoose Model: -------------------
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});
//------------------------------------







// create a new instance of Todo
var newTodo = new Todo({
    text: 'Buy Flowers.',
    completed: false,
    completedAt: 8
});

// save() adds to mondo database. then() is a promise.
newTodo.save().then((doc) => {
    console.log('Saved:', doc);
}, (err) => {
    console.log('Unable to save.', err);
});
