var express = require('express');
var router = express.Router();
var Article = require('../modules/article.js');

var artile = new Article();

/* GET home page. */
router.get('/', function (req, res, next) {
  artile.getAll((err,result)=>{
    if(err){
      res.statusCode = 500;
    }else{
      var item = JSON.stringify(result);
      var obj = JSON.parse(item);
      //console.log(obj);
      if(obj.length !==0 && obj[0].uid == null) obj = [];
      //console.log(obj);
      res.render('article-list',{obj:obj});
    }
  });
});

module.exports = router;
