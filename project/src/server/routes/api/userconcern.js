var express = require('express');
var router = express.Router();
var UserConcern = require('../../modules/api/userconcern.js');
var User = require('../../modules/api/user.js');

var userconcern = new UserConcern();
var user = new User();

router.post('/',(req,res,next)=>{
  var obj = {
    uid:req.body.uid,
    upid:req.body.upid
  };
  console.log(obj);
  userconcern.insertItem(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      user.updateConcern(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
        } else {
          user.updateFans(obj,(err,result)=>{
            if(err){
              res.statusCode = 500;
            } else {
              res.end('OK');
            }
          });
        }
      });
    }
  });
});

router.post('/del',(req,res,next)=>{
  var obj = {
    uid:req.body.uid,
    upid:req.body.upid
  }
  userconcern.deleteItem(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      user.deleteConcern(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
        } else {
          user.deleteFans(obj,(err,result)=>{
            if(err){
              res.statusCode = 500;
            } else {
              res.end('OK');
            }
          })
        }
      })
    }
  });
});

router.get('/:uid',(req,res,next)=>{
  var obj = req.params;
  userconcern.getConcern(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var o = JSON.parse(JSON.stringify(result));
      res.json(o);
    }
  });
});
router.get('/fans/:upid',(req,res,next)=>{
  var obj = req.params;
  userconcern.getFans(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var o = JSON.parse(JSON.stringify(result));
      res.json(o);
    }
  });
});
module.exports = router;
