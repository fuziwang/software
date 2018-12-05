var express = require('express');
var router = express.Router();
var multer = require('multer');
var Back = require('../../modules/api/back.js');

var back = new Back();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/staticimage/apiback');          
  },
  filename: function (req, file, cb) {
      cb(null, req.body.rtel + "-" + file.originalname);        
  }
});

var upload = multer({ storage: storage   });

router.post('/',upload.single('rimage'),(req,res,next)=>{
  var obj = {};
  user.selectRid((err,result)=>{
    if(err){
      res.statusCode = 500;        
    }
    var rid = JSON.parse(JSON.stringify(result))[0].c;
    obj.rid = rid;              
  });
  obj.rimage = req.file.filename;
  obj.uid = req.body.uid;
  obj.rcontent = req.body.rcontent;
  obj.rtel = req.body.rtel;
  back.insertItem(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
      res.send('error');
    }else{
      res.send('ok');
    }
  });
});

module.exports = router;
