var express = require('express');
var router = express.Router();
var User = require('../../modules/api/user.js');
var crypto = require("crypto");

var user = new User();

const fs = require('fs');

router.post('/sexhobby',(req,res,next)=>{
  var obj = {
    uid:req.body.uid,
    usex:req.body.usex
  }
  console.log(req.body);
  user.updateSex(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      req.body.topic.forEach((e)=>{
        user.insertHobby(req.body.uid,e,(err,result)=>{
          if(err){
            res.statusCode = 500;
          } else{
            res.end('ok');
          }
        });
      });
    }
  });
});

router.get('/myarticle/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getArticle(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
    }
  });
});

router.get('/mysay/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getSay(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
    }
  })
})

router.get('/myhobby/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getHobby(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
    }
  })
})

router.get('/myconcern/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getConcern(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
    }
  })
})

router.get('/myfans/:upid',(req,res,next)=>{
  var obj = req.params;
  user.getFans(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
    }
  })
})


router.get('/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getAll(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var obj = JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});

router.post('/reg',(req,res,next)=>{
  var obj = req.body;
  console.log(obj);
  obj.ufans = 0;
  obj.uconcern = 0;
  obj.uimage = '2-5.png';
  var md5 = crypto.createHash("md5");
  obj.upass = md5.update(obj.upass).digest("hex");
  user.selectUid((err,result)=>{
    if(err){
      res.statusCode = 500;
    }
    var uid = JSON.parse(JSON.stringify(result))[0].c;
    obj.uid = uid;
    if(obj.uid){
      user.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
        }
        res.send('已成功');
      });
    }
  });
});

router.post('/login',(req,res,next)=>{
  var obj = req.body;
  var md5 = crypto.createHash("md5");
  console.log(obj.upass);
  obj.upass = md5.update(obj.upass).digest("hex");
  console.log(obj.upass);
  user.getUser(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    }
    var json = JSON.parse(JSON.stringify(result));
    res.json(json);
  })
});

router.post('/forget',(req,res,next)=>{
  var obj = req.body;
  var md5 = crypto.createHash("md5");
  obj.upass = md5.update(obj.upass).digest("hex");
  user.updatePass(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
      res.send('error');
    } else {
      res.send('ok');
    }
  });
});

router.post('/image',(req,res,next)=>{
  var obj = {
    uimage:req.body.uimage,
    uid:req.body.uid
  };
  console.log(obj);
  // console.log(obj);
  var base64Data = obj.uimage.replace(/^data:image\/\w+;base64,/, "");
  var dataBuffer = new Buffer(base64Data, 'base64');
  console.log(dataBuffer);
  obj.uimage = obj.uid + '-' + obj.uid + '.jpg';
  console.log(obj);
  fs.writeFile( "public/static/user/" + obj.uid + "-" + obj.uid + '.jpg', dataBuffer, function(err) {
    console.log(err);
    if(err){
      res.send('error');
    }else{
      user.updateImage(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
        }else{
          res.send('OK');
        }
      });
    }
  });
});

/*
router.post('/tel',(req,res,next)=>{
  var obj = {
    utel = req.body.utel;
  }
  user.getTel(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
      res.send('error');
    } else {
      res.send('ok!');
    }
  });
});
*/
router.post('/update',(req,res,next)=>{
  var obj = {
    uimage:'2-5.png',
    uid:req.body.uid,
    uname:req.body.uname,
    usex:req.body.usex,
    uage:req.body.uage,
    uwhere:req.body.uwhere,
    udescribe:req.body.udescribe,
    topic:req.body.topic
  };
  user.getAll(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var o = JSON.parse(JSON.stringify(result));
      obj.ufans = o[0].ufans;
      obj.uconcern = o[0].uconcern;
      obj.utel = o[0].utel;
      obj.upass = o[0].upass;
      user.deleteUser(obj.uid,(err,result)=>{
        if(err){
          res.statusCode = 500;
        } else {
          user.deleteHobby(obj.uid,(err,result)=>{
            if(err){
              res.statusCode = 500;
            } else {
              user.insertUser(obj,(err,result)=>{
                if(err){
                  res.statusCode = 500;
                } else {
                  obj.topic.forEach((e)=>{
                    user.insertHobby(obj.uid,e,(err,result)=>{
                      if(err){
                        res.statusCode = 500;
                      } else {
                        user.getAll(obj.uid,(err,result)=>{
                          if(err){
                            res.statusCode = 500;
                          } else {
                            var json = JSON.parse(JSON.stringify(result));
                            res.json(json);
                          }
                        });
                      }
                    });
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});
module.exports = router;
