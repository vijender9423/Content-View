/* jshint esnext: true */

module.exports = (app) => {
    var contentView = require('../controller/controller.js');

    app.post('/content_view', contentView.create);
}