import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {
  isCheck=0;
  fenxiang(){
       console.log(this.isCheck);
      this.isCheck=1;
      console.log(this.isCheck);
     }
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
}
