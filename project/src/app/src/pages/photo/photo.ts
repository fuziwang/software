import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Fruit{
  fid:number;
  fname:string;
  ftime:string;
}
interface Photo{
  pid:number;
  pname:string;
  ptype:string;
  plocal:string;
  ptime:string;
  pstatus:number;
  xid:number;
  xname:string;
}

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  userPhotosname="";
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,public storage:StorageProvider) {
    this.id=navParams.get('id');
    console.log(navParams.get('fname'));
    this.getList();
    console.log(this.id);
  }
  changeId;
  arr:Array<Fruit>=[];
  list:Array<Photo>=[];
  content;
  getList(){
    //获取list用于显示
    this.api.getPhoto(this.id).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      console.log('图片',this.list);
    });
    this.api.getPhotos(this.id).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      console.log('相册',this.list);
      this.userPhotosname=this.list[0].xname;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }
}

