const mongoose = require('mongoose'),
    Person = require('./person.js');

mongoose.connect('mongodb://localhost/promise_issue');
mongoose.Promise = Promise;

var model = {
    name: 'John'
};

new Person(model).save().then(data => {
    console.log(data);
});

Person.find().exec().then(data => {
    console.log('found', data);
}).then(data => {
    console.log('another?');
}).then(data => {
    console.log('another2?');
});
