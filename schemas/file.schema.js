/* jshint esnext: true */

const mongoose = require('mongoose');
//var category = require('../schemas/category.schema.js');




 /*
 function isArray(val){
    return Object.prototype.toString.call(val) === '[object Array]';
 }

 function arrayIsEmpty(val){
         return val.length!=0;
 }

 var many = [
    { validator: isArray, msg: 'pages isnt array!' }
  , { validator: arrayIsEmpty, msg: 'No pages found !' }
]

*/
 
/*extend(
  'isArray',
  function(val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  },
  'Not an array'
) ;
/*  extend('arrayIsEmpty',(val)=>{
 return val.length!=0
},
'No page found.');
*/



 
/* var pageValidator = [
    extend({
      validator: 'isArray'
    })];/*,
    validate({
      validator: 'arrayIsEmpty'
    }),
  ] 
  */
  

  





const someFileSchema = mongoose.Schema({
    name:String,
    title: String,
    createdBy: String,
    createdOn: Date,
    category:  String,
    pages:Array
});

module.exports = mongoose.model('File',someFileSchema);