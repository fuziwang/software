import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityPage } from '../community/community';
import { ChoosePage } from '../choose/choose';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  edit(){
    this.navCtrl.push(ContactPage);
  }
  goChoose(){
    this.navCtrl.push(ChoosePage);
  }
  chengGong(){
    this.navCtrl.push(CommunityPage);
  }
}
