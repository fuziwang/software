import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Photo{
  pid:number;
  pname:string;
  ptype:string;
  plocal:string;
  ptime:string;
  pstatus:number;
  xid:number;
}
@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.getList();
  }
  list:Array<Photo>=[];

  content;
  getList(){
    //获取list用于显示
    this.api.getPhoto().then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }

}
