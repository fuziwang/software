var express = require('express');
var router = express.Router();
var Photo = require('../../modules/api/photo.js');
var Photos = require('../../modules/api/photos.js');
var multer = require('multer');

var photo = new Photo();
var photos = new Photos();

router.get('/:xid',(req,res,next)=>{
  var obj = req.params;
  console.log(obj);
  photo.getPhoto(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var obj = JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});

router.post('/',(req,res,next)=>{
    var obj = {};
    photo.selectPid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var pid = JSON.parse(JSON.stringify(result))[0].c;
      obj.pid = pid;
      if(obj.pid){
        var base64Data = obj.pname.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64Data, 'base64');
        obj.pname = obj.xid + '-' + obj.pid + '.jpg';
        obj.plocal = obj.pname;
        obj.xid = req.body.xid;
        obj.ptype = '.jpg';
        photo.insertItem(obj,(err,result)=>{
          if(err){
            res.statusCode = 500;
            res.send('error');
          } else {
            photos.updateItem(obj,(err,result)=>{
              if(err){
                res.statusCode = 500;
                res.send('error');
              } else {
                fs.writeFile('public/static/photos/photo' + obj.xid + '/' + obj.pname,dataBuffer,function(err){
                  if(err){
                    res.send('error');
                  } else {
                    res.send('ok!');
                  }
                })
              }
            });
          }
        });
      }
  });
});

module.exports = router;
