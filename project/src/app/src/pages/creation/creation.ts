import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";//引入服务
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the CreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Article {
  aid: number;
  atitle:string;
  aimage:string;
  uid:string;
  aread:number;
  adianzan:number;
  acomment:number;
}
interface Say{
  sid:number;
  scontent:string;
  stime:string;
  simage:string;
  status:number;
  uid:number;
  uname:number;
}

@IonicPage()
@Component({
  selector: 'page-creation',
  templateUrl: 'creation.html',
})
export class CreationPage {

  list:Array<Article>=[];
  list1: Array<Say> = [];
  arr=[1,2,3,4,5];
  isActive=true;
  uid=this.storage.getItem('uid');
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private app: App, public api:ApiProvider,public storage:StorageProvider) {
    this.getaList(this.uid);
    this.getsList(this.uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationPage');
  }
  getaList(id){
    this.api.acreate(id).then(data=>{
      console.log(data);
      this.list=<any>data;
      console.log(this.list);
    })
  }
  getsList(id){
    console.log(id);
    this.api.screate(id).then(data=>{
      //console.dir(data);
      this.list1=<any>data;
      console.log(this.list1);
    })
  }
  
}
