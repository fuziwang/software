import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { ApiProvider } from "../../providers/api/api";//引入服务
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the AccountPage page.
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
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  userTouxiang="";
  userName="";
  userWhere="";
  userDescribe="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,private storage:StorageProvider) {
   
    this.getList();
    
  }
  list:Array<user>=[];
  uid=this.storage.getItem('uid');
  id=this.storage.getItem('uid');
  getList(){
    //获取list用于显示
    this.api.getMy(this.uid).then(data=>{
      console.dir(data);
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
  edit(){
    this.navCtrl.push(EditPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}