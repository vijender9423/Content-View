const mongoose = require('mongoose');

var Page = mongoose.Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  module.exports= mongoose.model('Pages',Page);