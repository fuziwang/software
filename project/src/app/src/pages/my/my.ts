import { Component } from '@angular/core';
import { AccountPage } from '../account/account';
import { AlbumPage } from '../album/album';
import { VideoPage } from '../video/video';
import { FeedbackPage } from '../feedback/feedback';
import { SharePage } from '../share/share';
import { SetupPage } from '../setup/setup';
import { CreationPage } from '../creation/creation';
import { FollowPage } from '../follow/follow';
import { FansPage } from '../fans/fans';
import { HomepagePage } from '../homepage/homepage';
import { EditPage } from '../edit/edit';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { App } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
// import { ModalPage } from './ModalPage';
/**
 * Generated class for the MyPage page.
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
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  userTouxiang="";
  userName="";
  userWhere="";
  userDescribe="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,private app:App,private storage:StorageProvider) {
   
    this.getList();
    
  }
  id=this.storage.getItem('uid');
  list:Array<user>=[];
  getList(){
    //获取list用于显示
    this.api.getMy(this.id).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      //console.dir(this.list);
      console.log(this.list);
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
    this.api.getuserName(this.id).then(data=>{
      // console.dir(data);
      this.list=<any>data;
      // console.dir(this.list);
      console.log(this.list);
      if(this.list[0].uname===null){
        this.userName="悦成长用户";
        //console.log(1);
      }else{
        this.userName=this.list[0].uname;
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
    this.api.getuserDescribe(this.id).then(data=>{
      // console.dir(data);
      this.list=<any>data;
      // console.dir(this.list);
      console.log(this.list);
      if(this.list[0].udescribe===null){
        this.userDescribe="不一样的家庭，探寻不一样的成长";
        //console.log(1);
      }else{
        this.userDescribe=this.list[0].udescribe;
        //console.log(2);
      }
    });
  }
  account(){
    this.navCtrl.push(AccountPage);
  }
  album(){
    this.navCtrl.push(AlbumPage);
  }
  video(){
    this.navCtrl.push(VideoPage);
  }
  feedback(){
    this.navCtrl.push(FeedbackPage);
  }
  share(){
    this.navCtrl.push(SharePage);
  }
  setup(){
    this.navCtrl.push(SetupPage);
  }
  creation(){
    this.navCtrl.push(CreationPage);
  }
  follow(){
    this.navCtrl.push(FollowPage);
  }
  fans(){
    this.navCtrl.push(FansPage);
  }
  homepage(){
    this.navCtrl.push(HomepagePage);
  }
  edit(){
    this.navCtrl.push(EditPage);
  }
  ionViewDidLoad() {
    this.getList();
    console.log('ionViewDidLoad MyPage');
  }
  ionViewDidEnter(){
    this.getList();
  }

}
