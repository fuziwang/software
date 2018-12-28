var express = require('express');
var router = express = express.Router();
var BannerArticle = require('../../modules/api/bannerarticle.js');

var bannerarticle = new BannerArticle();

router.get('/:aid',(req,res,next)=>{
  var obj = req.params;
  bannerarticle.getAll(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var o = JSON.parse(JSON.stringify(result));
      res.json(o);
    }
  });
});

module.exports = router;
