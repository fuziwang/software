var express = require('express');
var router = express.Router();
var Say = require('../../modules/api/say.js');
var multer = require('multer');
var say = new Say();

router.get('/',(req,res,next)=>{
  say.getAll((err,result)=>{
    if(err){res.statusCode = 500;}
    else{
      //console.log(result);
      var obj = JSON.parse(JSON.stringify(result));
      //console.log(obj);
      res.json(obj);
    }
  });
});

router.get('/:sid',(req,res,next)=>{
  var obj = req.query;
  say.getSay(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var obj = JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/content');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.aid + "-" + file.originalname);            
  }
});

var upload = multer({ storage: storage    });

router.post('/',upload.single('aimage'),(req,res,next)=>{
    var obj = {};
    say.selectSid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var sid = JSON.parse(JSON.stringify(result))[0].c;
      obj.sid = sid;            
    });
    obj.simage = req.file.filename;
    obj.uid = req.body.uid;
    obj.scontent = req.body.scontent;
    say.insertItem(obj,(err,result)=>{
      if(err){
        res.statusCode = 500;
        res.send('error');
      }else{
        res.send('ok');
      }
    });
});

module.exports = router;