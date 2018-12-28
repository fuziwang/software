const db = require('../database.js');

var BannerArticle = function(){};

BannerArticle.prototype.getAll = function(obj,cb){
  const sql = 'select aid,atitle,acontent,atime,acomment,aimage,uname from BannerArticle,User where BannerArticle.uid = User.uid and aid = ?';
  db.query(sql,[obj.aid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
module.exports = BannerArticle;
