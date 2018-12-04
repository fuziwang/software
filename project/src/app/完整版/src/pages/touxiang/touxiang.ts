import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XingquPage } from '../xingqu/xingqu';

/**
 * Generated class for the TouxiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touxiang',
  templateUrl: 'touxiang.html',
})
export class TouxiangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TouxiangPage');
  }
  xingqu(){
    this.navCtrl.push(XingquPage);
  }

}
