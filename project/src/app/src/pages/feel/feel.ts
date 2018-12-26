import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { AuthoritPage } from '../authorit/authorit';
import { ShequPage } from '../shequ/shequ';
import { ApiProvider } from '../../providers/api/api';
import { EditPage } from '../edit/edit';

/**
 * Generated class for the FeelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Say{
  sid:number;
  scontent:string;
  stime:string;
  simage:string;
  status:number;
  uid:number;
}

@IonicPage()
@Component({
  selector: 'page-feel',
  templateUrl: 'feel.html',
})
export class FeelPage {
  text;
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }
  // getList(){
  //   let data=JSON.stringify({
  //     scontent:this.text,
  //   });
  //   this.api.postSay(data).then(data=>{
  //     console.dir(data);
  //   });
  // }
  // tijiao(){
  //   this.getList();
  // }

  goCamera(){
    this.navCtrl.push(CameraPage);
  }
  goAuthority(){
    this.navCtrl.push(EditPage);
  }
  openModal(){
    this.navCtrl.push(ShequPage);
  }
}
