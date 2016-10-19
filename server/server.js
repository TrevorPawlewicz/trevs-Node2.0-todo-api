var express    = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js'); // ES6
var {Todo}     = require('./models/todo.js'); // ES6
var {User}     = require('./models/user.js'); // ES6

var app        = express();
var PORT       = 3000; // localhost

app.use(bodyParser.json()); // middleware to pass to Express




// ROUTES-------------------------------------------

app.post('/todos', (req, res) => {
    // create new Todo instance:
    var todo = new Todo({
        text.req.text
    });

    // save     promise
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err); // send error with status code
    });
});
















// SERVER--------------------------------------------
app.listen(PORT, () => {
    console.log(`...Server has started on ${PORT}!`);
});
//
