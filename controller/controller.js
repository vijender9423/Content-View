/* jshint esnext: true */

var File = require('../model/file.model.js');


exports.create = (req, res) => {
    
  console.log("REQUEST****** "+ req.body.name);
  var temp = req.body;
    var file = new File({
        name : temp.name,
        title: "My First Line",
        createdBy:"Rohit" 
    });

    console.log(file);
    file.insert(function (err) {
        if (err) return handleError(err);
        // saved!
      });

    file.save()
    .then(data => {
	
        res.send(data);
		console.log('AFTER'+data);
		
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    }); 
};