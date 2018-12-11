import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoPage } from '../photo/photo';
/**
 * Generated class for the AlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {
  arr=[1,2,3,4,5];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  photo(){
    this.navCtrl.push(PhotoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumPage');
  }

}
