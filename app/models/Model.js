var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define the Model model
//m_name - Model Name; make - Brand Name
var modelSchema = new Schema({
    m_name: String,
    make: String
});

module.exports = mongoose.model('models', modelSchema);

