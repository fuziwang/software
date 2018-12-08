import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

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
}
interface  ArticleComment{
  aid: number;
  atitle:string;
  acontent:string;
  atime:string;
  aimage:string;
  uid:string;
}
@IonicPage()
@Component({
  selector: 'page-tiezi',
  templateUrl: 'tiezi.html',
})



export class TieziPage {

  isCheck=0;
  arr=[1,2,3,4];
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.id=navParams.get('id');
    this.getList();
    console.log(this.id);
  }
  list:Array<Tiezi>=[];


  getList(){
    //获取list用于显示
    this.api.getList_next(this.id).then(data=>{
      console.log(this.id);
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);

    });
    
  }
  last(){
    this.navCtrl.pop();
  }
    fenxiang(){
      console.log(this.isCheck);
     this.isCheck=1;
     console.log(this.isCheck);
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad TieziPage');
  }

}
