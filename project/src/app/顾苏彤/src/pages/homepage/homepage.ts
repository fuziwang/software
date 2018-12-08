import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreationPage } from '../creation/creation';
import { FollowPage } from '../follow/follow';
import { FansPage } from '../fans/fans';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  creation(){
    this.navCtrl.push(CreationPage);
  }
  follow(){
    this.navCtrl.push(FollowPage);
  }
  fans(){
    this.navCtrl.push(FansPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
