/* jshint esnext: true */

module.exports = (app) => {
    var contentView = require('../controller/controller.js');
    var multer = require(`multer`);
    var upload = multer({dest:'../uploads/'});
   // var multer = require(`multer`);
    //var upload = multer({dest: `upload/`});

    app.post('/content_view', contentView.create);
    app.post('/upload',upload.single('userPhoto'),contentView.uploadPages);
}