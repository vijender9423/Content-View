/* jshint esnext: true */

var mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {type: name, required: true},
    page: {type: String}
});

module.exports('Category',categorySchema);