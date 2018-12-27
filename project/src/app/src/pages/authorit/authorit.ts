import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuthoritPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authorit',
  templateUrl: 'authorit.html',
})
export class AuthoritPage {
  status = true;
  length = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthoritPage');
  }
  changestatus(){
    // if(this.status == true && this.length == 1){
    //   this.status = !this.status;
    //   this.length = 0;
    //   return;
    // }else if(this.status == false && this.length == 0){
    //   this.status = !this.status;
    //   this.length=1;
    //   return;
    // }else{
    //   return;
    // }
    this.status = !this.status;
  }
}
