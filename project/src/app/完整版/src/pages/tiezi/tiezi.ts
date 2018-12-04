import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TieziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tiezi',
  templateUrl: 'tiezi.html',
})



export class TieziPage {

  isCheck=0;
  arr=[1];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
