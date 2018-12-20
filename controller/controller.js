/* jshint esnext: true */

var File = require('../schemas/file.schema.js');
var Page = require('../schemas/image.schema.js');
var validator = require('../validator/file.validator.js');
var multer = require('multer');
var Joi = require('joi');
var fs = require(`fs`);

/*var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.name + '-' + Date.now())
    }
  }) */
//   var upload = multer({dest:'../uploads/'});//*multer({ storage: storage });

  var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, '../uploads')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        // console.log('file upload');
        // console.log(file);
        // console.log(file.fieldname);
        // console.log(file.originalname);
        if(file.originalname.split('%').length > 0){
            cb(null, file.fieldname + '-' + datetimestamp + '.jpg')
        }
        else
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });
    var upload = multer({ //multer settings
        storage: storage
    }).single('userPhoto');


exports.create = (req, res) => {
    
    var data = req.body;
    Joi.validate(data,validator,(err,value)=>{
        if (err) {
            console.log(validator.schema);
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: err.message,
                data: data
            });
        }
    })

   var file = new File({
        name : req.body.name,
        title: req.body.title,
        createdBy:req.body.createdBy,
        pages: req.body.pages
    });

    file.save()
    .then(data => {
	    res.send(data);
	}).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    }); 
}

 exports.uploadPages = (req,res)=>{

    upload(req,res,function(err){
        if(err){
            res.status(400).send({error_code:1,err_desc:err});
            return;
        }
        // console.log(req.file.path)
        res.json({error_code:0,err_desc:null,file:req.files});
    })

    //     var page = new Page();
    //     console.log(req);
    //    /* if(req.file===undefined){
    //         res.status(422).json({
    //             status: 'error',
    //             message: "File cannot be empty.",
    //         }); */
    //         //upload.any();
    //         res.send('File uploaded successfully');
        }
        
    

       /* page.img.data = fs.readFileSync(req.file.path);
        page.img.contentType = `image/png`;
        page.save()
        console.log(page); */

    
     /*.then(data => {
            res.send('Successully uploaded');
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        }); */