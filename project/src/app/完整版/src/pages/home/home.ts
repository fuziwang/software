import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TieziPage } from '../tiezi/tiezi';
import { XingquPage } from '../xingqu/xingqu';
import { App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isActive=true;
  isClick(i){
    this.isActive=i;
  }

  arr=[1,2,3,4];
  constructor(public navCtrl: NavController,private app:App,) {
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    // this.http.get('/api/courses').subscribe((data)=>{
    //   this.text=data;
    //   console.log(data);
    // })

  }
  last(){
    this.app.getRootNav().push(XingquPage);
  }
  tiezi(){
    this.app.getRootNav().push(TieziPage);
  }
  doRefresh(refresher) {
    console.log('Begin async       operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
