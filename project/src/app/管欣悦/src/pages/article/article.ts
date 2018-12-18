import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShequPage } from '../shequ/shequ';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Article{
  aid:number;
  atitle:string;
  acontent:string;
  atime:string;
  acomment:number;
  aimage:string;
  astaus:number;
  astatus:number;
  aprivate:number;
  uid:number;
}

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  text;
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }
  getList(){
    let data=JSON.stringify({
      acontent:this.text,
    });
    this.api.postArticle(data).then(data=>{
      console.dir(data);
    });
  }

  openModal(){
    this.getList();
    //this.navCtrl.push(ShequPage)
  }
  goCamera(){
    
  }
}
