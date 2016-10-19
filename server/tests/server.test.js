//------------------------------TESTING ONLY---------------------------------
const expect  = require('expect');
const request = require('supertest');

const {app}   = require('./../server.js'); // import local file
const {Todo}  = require('./../models/todo.js');
//-------------------------------------------------------------

// func called before 'describe'
beforeEach((done) => {
    // remove ALL database items
    Todo.remove({}).then(() => done());
});


// mocha test func
describe('POST /todos', () => {
    // valid:
    it ('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text: text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                // fetch ALL Todos:
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((err) => {
                    done(err);
                });
            });
    });

    // invalid:
    it ('should NOT create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((err) => done(err));
            });
    });

});
