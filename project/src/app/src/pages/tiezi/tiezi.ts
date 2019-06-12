import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
import { HomePage } from '../home/home';
import { ChangeDetectorRef } from '@angular/core';  

/**
 * Generated class for the TieziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Tiezi {
  aid: number;
  atitle:string;
  acontent:string;
  atime:string;
  aimage:string;
  uid:string;
  aread:number;
  adianzan:number;
}
interface  ArticleComment{
  aid: number;
  atitle:string;
  acontent:string;
  atime:string;
  aimage:string;
  uid:string;
  uimage:string;
  uname:string;
}
@IonicPage()
@Component({
  selector: 'page-tiezi',
  templateUrl: 'tiezi.html',
})


export class TieziPage {

  dianzannum;
  seenum;
  isColor = 0;
  isCheck=0;
  isConcern;
  isAbled;
  arr=[1];
  //isColor=1;
  id;
  value="";
  length = 0;
  upid;
  uid = this.storage.getItem('uid');
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,public storage:StorageProvider,public cd: ChangeDetectorRef) {
    this.id=navParams.get('id');
    this.upid = navParams.get('uid');
    this.getList();
    this.getarticlecomment();
    this.IsConcern();
    
    console.log(this.id);
    console.log(this.upid);
  }
  list:Array<Tiezi>=[];
  commont:Array<ArticleComment>=[];
  content;
  concerns=[];
  

  // guanzhu(){
  //   var btn = document.getElementById("btn");
  //   btn.value = "已关注";
  //   btn.disabled = true;
  // }

  getarticlecomment(){
    //获取list用于显示
    this.api.getArticleComment_next(this.id).then(data=>{
      console.dir(data);
      this.commont=<any>data;
    });
  }

  postList() {
    let data = JSON.stringify({
      accontent: this.value,
      aid: this.id,
      uid: this.uid,
    });
    this.api.postPinglun(data).then(data => {
      console.log(data);
      console.log(this);
      this.commont.push({
        accontent: this.value,
        aid: this.id,
        uid: this.uid,
      })
      this.getarticlecomment();
    });
  }
  getList(){
    //获取list用于显示
    this.api.getList_next(this.id).then(data=>{
      // console.log(this.id);
      // console.dir(data);
      this.list=<any>data;
      console.log(this.list);
      this.content=this.list[0].acontent.split('|').join("\n");
      this.dianzannum = this.list[0].adianzan;
      this.seenum = this.list[0].aread;
      // console.log(this.dianzannum);
      // console.log(this.seenum);
      // console.log(this.content);
    });
    
  }
  dianzan(aid) {
    //console.log(this.isColor);
    let data = JSON.stringify({
      aid:aid
    })
    if (this.isColor == 1) {
      this.isColor = 0;
      console.log(this.dianzannum);
      this.api.delDian(data).then(data=>{
        console.log(data);
        this.dianzannum--;
        
      })
    } else {
      this.isColor = 1;
      console.log(this.dianzannum);
      this.api.postDian(data).then(data=>{
        this.dianzannum=this.dianzannum+1;
        
      })
    }

  }

  // last(){
  //   this.storage.setItem('dianzannum',this.list[0].adianzan);    
  //   this.navCtrl.setRoot(HomePage);
  // }
  fenxiang(){
    console.log(this.isCheck);
    this.isCheck=1;
    console.log(this.isCheck);
  }
  concern() {
      let data = JSON.stringify({
        uid: this.uid,
        upid: this.upid
      });
      console.log(data);
      console.log(this.upid);
      this.api.postConcern(data).then(data => {
        console.log(data);
      })
      document.querySelector('.concern').textContent = "已关注";
      document.querySelector('.concern').setAttribute('disabled','true');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TieziPage');
    this.IsConcern();
    // 关注过的
    // for(){
    //   if(id === [i].id){
    //     true;
          // break
    //   }
    // }
    
  }
  IsConcern(){
    this.api.concerns(this.uid).then(data=>{
      console.log(data);
      this.concerns =<any>data;
      console.log(this.concerns);
      for(var i = 0;i<this.concerns.length;i++){
        console.log(this.concerns.length,i);
        console.log(this.concerns[i].upid);
        if(this.upid === this.concerns[i].upid){
          console.log('bbh');
          this.isAbled = false;
          this.isConcern = false;
          console.log(this.isAbled,this.isConcern);
        }else{
          this.isAbled = true;
          this.isConcern = true;
        }
      }
    })
  }
  GetConcern(id){
    this.api.getFollow(id).then(data=>{
      console.log(data);
    })
  }
  comment() {
    this.postList();
    this.value = "";
    this.length = 0;
    this.getarticlecomment();
  }
  len(value){
    this.length = value.length;
  }
}