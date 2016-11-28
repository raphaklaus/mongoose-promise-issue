const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Person = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Person', Person);
