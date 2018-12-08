import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { XieyiPage }from '../xieyi/xieyi';
/**
 * Generated class for the ZhucePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhucePage');
  }
  logIn(){
    this.navCtrl.push(LoginPage);
  }
  xieyi(){
    this.navCtrl.push(XieyiPage);
  }
}
