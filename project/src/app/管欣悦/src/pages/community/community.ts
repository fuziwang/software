import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharePage } from '../share/share';
import { HomepagePage } from '../homepage/homepage';
import { ContentPage } from '../content/content';


@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
  arr=[1,2,3,4,5];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goShare(){
    this.navCtrl.push(SharePage);
  }
  goHomeage(){
    this.navCtrl.push(HomepagePage);
  }
  goContent(){
    this.navCtrl.push(ContentPage);
  }

}
