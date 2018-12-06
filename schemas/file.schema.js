/* jshint esnext: true */

const mongoose = require('mongoose');
//var category = require('../model/category.model.js');

var Schema = mongoose.Schema;

const someFileSchema = mongoose.Schema({
    name: String,
    title: String,
    createdBy:  String,
    createdOn: Date,
   // categories: {type:category},
    pages:String

});

module.exports = mongoose.model('File',someFileSchema);