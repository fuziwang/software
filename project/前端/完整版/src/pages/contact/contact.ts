import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelPage } from '../feel/feel';
import { PicturePage } from '../picture/picture';
import { VidioPage } from '../vidio/vidio';
import { ArticlePage } from '../article/article';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  constructor(public navCtrl: NavController,private app:App) {

  }
 goSub(){
    this.app.getRootNav().push(FeelPage);
  }
  goPicture(){
    this.app.getRootNav().push(PicturePage);
  }
  goVidio(){
   this.app.getRootNav().push(VidioPage);
  }
  goArticle(){
    this.app.getRootNav().push(ArticlePage);
  }
} 
