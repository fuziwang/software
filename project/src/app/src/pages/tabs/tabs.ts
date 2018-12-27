import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShequPage } from '../shequ/shequ';
import { MyPage } from '../my/my';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ShequPage;
  tab5Root = MyPage;


  constructor(public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){
    if(document.querySelector('#tab-t0-2')){ 
      document.querySelector('#tab-t0-2').addEventListener('click',()=>{
          let profileModal = this.modalCtrl.create(AddPage);  
          profileModal.present();
        },false);
      }
    }
}
