import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";//引入服务
import { ContentPage } from "../content/content";
import { HomepagePage } from "../homepage/homepage";
import { SharePage} from "../share/share";
import { TransmitPage } from '../transmit/transmit';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the ShequPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Say{
  sid:number;
  scontent:string;
  stime:string;
  simage:string;
  status:number;
  uid:number;
  uname:string;
  uimage:string;
}


@IonicPage()
@Component({
  selector: 'page-shequ',
  templateUrl: 'shequ.html',
})
export class ShequPage {
  isSColor = this.storage.getItem('isSColor');;
  isCheck=0;
  isPl=0;
  userTouxiang="";
  userName="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public storage:StorageProvider) {
    this.getList();
  }
  id;
  list:Array<Say>=[];
  arr=[1,2,3];
  ionViewDidLoad() {
    this.getList();
    console.log('ionViewDidLoad ShequPage');
  }
  fenXiang(){
    this.isCheck++;
    if(this.isCheck%2==0){
     
      this.isCheck=this.isCheck%2;
    }else{
      this.isCheck=1;
    }
   
   }
   pL(){
     this.isPl=1;
    }
  getList(){
    //获取list用于显示
    this.api.getSay().then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.log(this.list);
      for(var i = this.list[0].uid;i<this.list.length;i--){
        console.log(i);
        this.api.getTouxiang(i).then(data=>{
          // console.dir(data);
          this.list=<any>data;
          // console.dir(this.list);
          console.log(this.list);
          if(this.list[i].uimage===null){
            this.userTouxiang="0-0.png";
            //console.log(1);
          }else{
            this.userTouxiang=this.list[i].uimage;
            //console.log(2);
          }
        }); 
      }
      for(var j = this.list[0].uid;j<this.list.length;j--){
        this.api.getuserName(i).then(data=>{
          // console.dir(data);
          this.list=<any>data;
          // console.dir(this.list);
          console.log(this.list);
          if(this.list[i].uname===null){
            this.userName="悦成长用户";
            //console.log(1);
          }else{
            this.userName=this.list[i].uname;
            //console.log(2);
          }
        });
      }
      
    });

  }
  goShare(){
    this.navCtrl.push(SharePage);
  }
  goTiezi_next(index,uid){
    console.log(index,uid);
    this.navCtrl.push(ContentPage,{
      id : index,
      upid: uid
    });
  }
  
  goContent(){
    this.navCtrl.push(ContentPage);
  }
  goTransmit(){
    this.navCtrl.push(TransmitPage);
  }
  dianzan(){
    console.log('sehun');
    if(this.isSColor == 1){
      this.storage.setItem('isSColor',0);
    } else {
      this.storage.setItem('isSColor',1);
    }
  }
}
