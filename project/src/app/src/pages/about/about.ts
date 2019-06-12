import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { PhotoPage } from '../photo/photo';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
import { AlbumPage } from '../album/album';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

interface Fruit{
  fid:number;
  fname:string;
  ftime:string;
}
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

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  userTouxiang="";
  
  constructor(public navCtrl: NavController ,private api:ApiProvider,private storage:StorageProvider,public actionSheetCtrl:ActionSheetController,public toastCtrl:ToastController) {
    this.getList();
    console.log(this.id); 
  }
  
  changeId;
  arr:Array<Fruit>=[];
  list:Array<user>=[];
  num=0;
  text;
  id=this.storage.getItem('uid');
  change_text;
  isCheck=0;
  isdel=0;
  ageselect;
  tid = 0;
  fname;

  add(){
    this.isCheck=1;
  }
  quxiao(){
    this.isCheck=0;
    this.isdel=0;
    this.getList();
  }
  addArr(){
    this.postAddApple();
    this.isCheck=0;
    this.getList();
    
  }
  change(id,fname){
    this.fname = fname;
    console.log(id);
    this.changeId=id;
    this.isdel=1;
    console.log(this.changeId);
    this.getList();
  }

  del(){
    this.getDeleteApple();
    this.isdel=0;
    this.getList();
  }

  change_content(){
    this.postChangeApple();
    this.isdel=0;
    this.getList();
  }
  goAlbum(){
    this.navCtrl.push(AlbumPage);
  }
  goPhoto(){
    this.navCtrl.push(PhotoPage,{fname:this.fname,id:this.changeId});
  }
  goVidio(){
    this.navCtrl.push(VideoPage);
  }

  getDeleteApple(){
    let data=JSON.stringify({
     fid:this.changeId,
     tid:this.id
    });
    this.api.postDeleteApple(data).then(data=>{
      console.dir(data);
    });
    this.getList();
  }

  postChangeApple(){
    let data=JSON.stringify({
     fid:this.changeId,
     fname:this.change_text
    });
    this.api.postChangeApple(data).then(data=>{
      console.dir(data);
    });
    this.getList();
  }

  postAddApple(){
    let data=JSON.stringify({
     tid:this.tid,
     fname:this.text,
     uid:this.id,
     age:this.ageselect
    });
    this.api.postAddApple(data).then(data=>{
      console.log(data);
    });
    this.getList();
  }
  //显示菜单
  showMenu(){
    let actionSheet = this.actionSheetCtrl.create(
      { buttons: [ 
          { text: '0岁', 
            handler: () => {
              this.ageselect = 0;
              this. showInfo("已切换至0岁");
              this.getList()
            }
          }, 
          { text: '1岁', 
            handler: () => { 
              this.ageselect = 1;
              this. showInfo("已切换至1岁");
              this.getList()
            } 
          },
          { text: '2岁', 
            handler: () => { 
              this.ageselect = 2;
              this. showInfo("已切换至2岁");
              this.getList()
              } 
          },
          { text: '3岁', 
            handler: () => { 
              this.ageselect = 3;
              this. showInfo("已切换至3岁");
              this.getList()
            } 
          },
          { text: '4岁', 
            handler: () => { 
              this.ageselect = 4;
              this. showInfo("已切换至4岁");
              this.getList()
            } 
          },
          { text: '5岁', 
            handler: () => { 
              this.ageselect = 5;
              this. showInfo("已切换至5岁");
              this.getList()
            } 
          },
          { text: '6岁', 
            handler: () => {
              this.ageselect = 6;
              this. showInfo("已切换至6岁");
              this.getList()
            } 
          },
          { text: '7岁', 
            handler: () => {
              this.ageselect = 7;
              this. showInfo("已切换至7岁");
              this.getList()
            } 
          },
          { text: '8岁', 
            handler: () => {
              this.ageselect = 8;
              this. showInfo("已切换至8岁");
              this.getList()
            } 
          },
          { text: '9岁', 
            handler: () => {
              this.ageselect = 9;
              this. showInfo("已切换至9岁");
              this.getList()
            } 
          },
          { text: '10岁', 
            handler: () => {
              this.ageselect = 10;
              this. showInfo("已切换至10岁");
              this.getList()
            } 
          }] 
        }); 
        //显示下拉菜单
        actionSheet.present();
}

  //显示toast消息
  showInfo(msg){
    let toast = this.toastCtrl.create({
        message: msg, //提示消息
        duration: 3000,//3秒后自动消失
        position: 'bottom',//位置top,bottom
        showCloseButton:true, //是否显示关闭按钮
        closeButtonText:"关闭" //关闭按钮字段
    });
    //显示toast
    toast.present();//符合触发条件后立即执行显示。
}
  //进入界面资源还没有加载完成的情况
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    // document.getElementById();
    var tabs = document.getElementsByClassName('tabbar').item(0);
    // tabs['style'].display = 'none';
  }
  //当已经进入界面的情况
  ionViewDidEnter(){
      
  }
  //离开页面的时候，设置显示下面的tabbar
  ionViewWillLeave(){
    var tabs = document.getElementsByClassName('tabbar').item(0);
    tabs['style'].display = 'flex';
 }
  getList(){
    let data=JSON.stringify({
      uid:this.id,
      age:this.ageselect
    });
    //获取list用于显示
    this.api.getFruits(data).then(data=>{
      this.arr = <any>data;
      this.tid = this.arr.length == 0?0:data[0].tid;
      console.log(this.tid);
      this.num = this.arr.length;
    });
   
    this.api.getTouxiang(this.id).then(data=>{
      // console.dir(data);
      this.list=<any>data;
      //console.log(this.list);
      if(this.list[0].uimage===null){
        this.userTouxiang="0-0.png";
        //console.log(1);
      }else{
        this.userTouxiang=this.list[0].uimage;
        //console.log(2);
      }
    }); 
    
  }
}