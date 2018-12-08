import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { ZhucePage } from "../zhuce/zhuce";
import { SetPwdPage } from '../set-pwd/set-pwd';
import { TouxiangPage } from '../touxiang/touxiang';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn( ) {
    this.navCtrl.push(TouxiangPage);
  }

  zhuce(){
    this.navCtrl.push(ZhucePage);
  }
  set(){
    this.navCtrl.push(SetPwdPage);
  }
}
