import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ChoosePage } from '../choose/choose';
import { CommunityPage } from '../community/community';

/**
 * Generated class for the VidioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vidio',
  templateUrl: 'vidio.html',
})
export class VidioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  edit(){
    this.navCtrl.pop();
  }
  goChoose(){
    this.navCtrl.push(ChoosePage);
  }
  chengGong(){
    this.navCtrl.push(CommunityPage);
  }

}
