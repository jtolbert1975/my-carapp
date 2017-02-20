var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define the Make model
//name - Brand Name
var makeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('makes', makeSchema);