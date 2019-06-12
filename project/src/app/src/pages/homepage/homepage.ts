import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { AlbumPage } from '../album/album';
import { VideoPage } from '../video/video';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface user{
  uid:number;
  uname:string;
  uimage:string;
  usex:string;
  uage:number;
  uwhere:string;
  utel:string;
  upass:string;
  ufans:number;
  uconcern:number;
  udescribe:string;
  ustatus:number;
}

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  userTouxiang="";
  userWhere="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,private storage:StorageProvider) {
   
    this.getList();
    
  }
  uid=this.storage.getItem('uid');
  id=this.storage.getItem('uid');
  list:Array<user>=[];
  getList(){
    //获取list用于显示
    this.api.getMy(this.uid).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });

    this.api.getTouxiang(this.id).then(data=>{
      // console.dir(data);
      this.list=<any>data;
      // console.dir(this.list);
      console.log(this.list);
      if(this.list[0].uimage===null){
        this.userTouxiang="0-0.png";
        //console.log(1);
      }else{
        this.userTouxiang=this.list[0].uimage;
        //console.log(2);
      }
    });
    this.api.getuserWhere(this.id).then(data=>{
      // console.dir(data);
      this.list=<any>data;
      // console.dir(this.list);
      console.log(this.list);
      if(this.list[0].uwhere===null){
        this.userWhere="中国";
        //console.log(1);
      }else{
        this.userWhere=this.list[0].uwhere;
        //console.log(2);
      }
    });
    
  }

  photo(){
    this.navCtrl.push(AlbumPage);
  }
  about(){
    this.navCtrl.push(AboutPage);
  }
  video(){
    this.navCtrl.push(VideoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}