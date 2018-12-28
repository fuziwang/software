const db = require('../database.js');

var UserConcern = function(){};

UserConcern.prototype.insertItem = function(obj,cb){
  const sql = 'insert into UserConcern values(?,?)';
  db.query(sql,[obj.uid,obj.upid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
UserConcern.prototype.deleteItem = function(obj,cb){
  const sql ='delete from UserConcern where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  })
}
UserConcern.prototype.getConcern = function(obj,cb){
  const sql = 'select distinct User.* from User,UserConcern where User.uid = UserConcern.upid and UserConcern.upid in (select upid  from UserConcern where uid = ?)';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
UserConcern.prototype.getFans = function(obj,cb){
  const sql = 'select distinct User.* from User,UserConcern where User.uid = UserConcern.uid and UserConcern.uid in (select uid from UserConcern where upid = ?)';
  db.query(sql,[obj.upid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
module.exports = UserConcern;
