import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FeelPage } from '../feel/feel';
import { PicturePage } from '../picture/picture';
import { VidioPage } from '../vidio/vidio';
import { ArticlePage } from '../article/article';
import { App } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
 
  constructor(public navCtrl: NavController,private app:App,public modalCtrl: ModalController) {

  }
  ionViewLoad(){
    let prorlrMomg = this.modalCtrl.create(AddPage);
    prorlrMomg.present();
  }
} 
