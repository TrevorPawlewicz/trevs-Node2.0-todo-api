var express    = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js'); // ES6
var {Todo}     = require('./models/todo.js'); // ES6
var {User}     = require('./models/user.js'); // ES6

var app        = express();
var PORT       = 3000; // localhost

app.use(bodyParser.json()); // middleware to pass to Express




// ROUTES-------------------------------------------
// CREATE
app.post('/todos', (req, res) => {
    // create new Todo instance:
    var todo = new Todo({
        text: req.body.text
    });

    // save     promise
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err); // send error with status code
    });
});

// READ
app.get('/todos', (req, res) => {
    // get ALL todos in collection
    Todo.find().then((todos) => {
        res.send({
            todos: todos
        }, (err) => {
            res.status(400).send(err);
        });
    });
});













// SERVER--------------------------------------------
app.listen(PORT, () => {
    console.log(`...Server has started on ${PORT}!`);
});
//

module.exports = {
    app: app
};
