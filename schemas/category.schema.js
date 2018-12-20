/* jshint esnext: true */

var mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {type: String, required: true},
    page: {type: Array, required: true}
});

module.exports= mongoose.model('Category',categorySchema);