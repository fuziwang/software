import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TieziPage } from '../tiezi/tiezi';
import { XingquPage } from '../xingqu/xingqu';
import { BannerarticlePage } from '../bannerarticle/bannerarticle';
import { App } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";//引入服务
import { StorageProvider } from '../../providers/storage/storage';

//定义首页格式接口
interface Article {
  aid: number;
  atitle:string;
  aimage:string;
  uid:string;
  aread:number;
  adianzan:number;
  acomment:number;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // dianzannum = this.storage.getItem('dianzannum');
  // seenum = this.storage.getItem('seenum');

  msg:string;//提示信息
  isLogin:boolean=true;//是否登录
  list:Array<Article>=[];
  list1: Array<Article> = [];
  //dianzannum=this.storage.getItem('dianzannum');
  //seenum=this.storage.getItem('seenum');
  isActive=true;
  uid=this.storage.getItem('uid');
  isClick(i){
    this.isActive=i;
    if(i==0){
      this.getNewList();
    } else{
      this.getList(this.uid);
    }
  }

  arr=[1,2,3,4];
  constructor(public navCtrl: NavController,private app:App, public api:ApiProvider,public storage:StorageProvider ) {
    this.getList(this.uid);
    //this.storage.setItem('seenum',this.seenum);
    //this.storage.setItem('dianzannum',this.dianzannum);
    //this.dianzannum=this.storage.getItem('dianzannum');
    //console.log(this.dianzannum);
    

  }
  
  getBanner(i){
    this.navCtrl.push(BannerarticlePage,{
      id:i
    });
  }
  getList(uid){
    //获取list用于显示
    console.log(uid);
    this.api.getList(uid).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      console.log(this.list);
      // this.storage.setItem('dianzannum',this.list[0].adianzan);
      // this.storage.setItem('seenum',this.list[0].aread);
    });
    //测试post请求
    // let data=JSON.stringify({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1
    // });
    // this.api.postData(data).then(data=>{
    //   console.dir(data);
    // });
  }
  getNewList(){
    this.api.getNewList().then(data=>{
      //console.dir(data);
      this.list1=<any>data;
      console.log(this.list1);
    })
  }
  
  last(){
    this.app.getRootNav().push(XingquPage);
  }
  next(index,uid){
    //this.seenum++;
    //this.storage.setItem('seenum',this.seenum);
    console.log(uid);
    let data = JSON.stringify({
      aid:index
    });
    this.api.postRead(data).then(data=>{
      console.log(data);
    })
    this.navCtrl.push(TieziPage,{
      id : index,
      uid: uid
    });
    console.log(index);
   
  }
  doRefresh(refresher) {
    console.log('Begin async       operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}