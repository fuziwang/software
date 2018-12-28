import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController  } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StorageProvider } from '../../providers/storage/storage';

import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { Camera, CameraOptions } from "@ionic-native/camera";
/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Photo{
  pid:number;
  pname:string;
  ptype:string;
  plocal:string;
  ptime:string;
  pstatus:number;
  xid:number;
}
@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  takephoto_image;
  chooseFromAlbum_image;
  id;
  uid = this.storage.getItem('uid');
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider,private storage: StorageProvider, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public imagePicker: ImagePicker, private camera: Camera,) {
    this.id=navParams.get('id');
    this.getList();
    console.log(this.id);
  }
  list:Array<Photo>=[];

  content;
  getList(){
    //获取list用于显示
    this.api.getPhoto(this.id).then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.dir('图片',this.list);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }
  get_takephoto() {
    let data = JSON.stringify({
      pname: this.takephoto_image,
      xid:this.id,
    });
    this.api.postTakephoto(data).then(data => {
      console.log(data);
    });

  }
  get_chooseAlbum() {
    let data = JSON.stringify({
      xid: this.id,
      pname: this.chooseFromAlbum_image
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
