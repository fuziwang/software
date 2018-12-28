import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { ShequPage } from '../shequ/shequ';
import { ApiProvider } from '../../providers/api/api';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { StorageProvider } from '../../providers/storage/storage';
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

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


/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  title;
  text;
  uid = this.storage.getItem('uid');
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageProvider, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public imagePicker: ImagePicker, private camera: Camera, private api: ApiProvider) {
  }
  getList(){
    let data=JSON.stringify({
      atitle:this.title,
      acontent:this.text,
      acomment:0,
      aprivate:1,
      uid:this.uid,
    });
    this.api.postArticle(data).then(data=>{
      console.dir(data);
    });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({ title: "发布成功", buttons: ["确定"] });
    alert.present().then(value => {
      return value;
    });
  }
  openModal(){
    this.getList();
    this.presentAlert();
    this.navCtrl.pop();
  }
  takephoto_image = "";
  chooseFromAlbum_image;
  get_takephoto() {
    let data = JSON.stringify({
      uid: this.uid,
      uimage: this.takephoto_image
    });
    this.api.postTakephoto(data).then(data => {
      console.log(data);
    });

  }
  get_chooseAlbum() {
    let data = JSON.stringify({
      uid: this.uid,
      uimage: this.chooseFromAlbum_image
    });
    this.api.postChooseAlbum(data).then(data => {
      console.dir(data);
    });

  }

  //上传图片
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: '拍照',
        role: 'takePhoto',
        handler: () => {
          this.takePhoto();
        }
      }, {
        text: '从相册选择',
        role: 'chooseFromAlbum',
        handler: () => {
          this.chooseFromAlbum();
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log("cancel");
        }
      }]
    });

    actionSheet.present().then(value => {
      return value;
    });
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: 2
    };

    this.camera.getPicture(options).then(image => {
      console.log('Image URI: ' + image);
      let base64Image = 'data:image/jpeg;base64,' + image;
      this.takephoto_image = base64Image;
      if (image) {
        //alert(image);
        // alert(this.avatar);
        this.get_takephoto();
      }
      // this.avatar = image.slice(7);
    }, error => {
      console.log('Error: ' + error);
    });
  }

  chooseFromAlbum() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0
    };

    this.camera.getPicture(options).then(image => {
      let base64Image = 'data:image/jpeg;base64,' + image;
      this.takephoto_image = base64Image;
      if (image) {
        //alert(image);
        // alert(this.avatar);
        this.get_takephoto();
      }
    }, error => {
      alert(error);
    });
  }
}

