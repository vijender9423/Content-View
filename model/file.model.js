/* jshint esnext: true */

class File {

    constructor(name,title,category,createdBy, pages){
        this.name = name;
        this.title = title;
        this.categories = category;
        this.createdBy = createdBy;
        this.createdOn = new Date;
        this.pages = pages;
    }
}
module.exports = File;