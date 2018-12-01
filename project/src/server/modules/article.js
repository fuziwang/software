const db = require('./database.js');

var Article = function(){};

Article.prototype.getAll = function(cb){
  const sql = 'select Article.aid,atitle,acontent,acomment,aimage,atime,GROUP_CONCAT(acolumn),aprivate,astatus from Article,ArticleColumn where Article.aid = ArticleColumn.aid group by Artcile.aid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  })
}

module.exports = Article;
