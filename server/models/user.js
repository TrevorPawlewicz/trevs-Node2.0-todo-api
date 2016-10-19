var mongoose = require('mongoose');






// User ----> mongoDB turns name into "users"!!!!!!
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'x@x.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save! Error:', err);
});
//-------------------------------------------------








module.exports = { User };
