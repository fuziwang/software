import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, AlertController} from 'ionic-angular';

import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
import {Camera, CameraOptions} from "@ionic-native/camera";
import { Base64 } from '@ionic-native/base64';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  url:any;  
  avatarPath='./assets/imgs/logo.png';//默认图片  
  data: string = "";  
  imageBase64 : Array<string>=[];  
  fileService: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public imagePicker: ImagePicker,private base64: Base64) {
  }
  getPicture(){  
    this.data="";  
    this.imageBase64=[];  
      
    // options 里的具体内容请参照官网https://ionicframework.com/docs/native/image-picker/  
    let options = {  
      maximumImagesCount: 5,  
      outputType: 1,  
      quality: 100  
    };  
    this.imagePicker.getPictures(options).then((results) => {  
      for (var i = 0; i < results.length; i++) {  
          console.log('Image URI: ' + results[i]);  
          // 保存图片到html控件  
          var imgUrl = "<img src=" +results[i] +" width=\"60px\" height=\"60px\">  ";  
          this.data=this.data+imgUrl;  
          // 转64字节  
          this.base64.encodeFile(results[i]).then((base64File: string) => {  
          this.imageBase64.push(base64File);  
          }, (err) => {  
            console.log(err);  
          });  
      }  
    }, (err) => {   
      alert("error");  
    });  
  }  
  saveAvatar() {  
    for (var i = 0; i < this.imageBase64.length; i++) {  
      if (this.imageBase64[i] != "") {  
        let fileObj = <any>{'base64': this.imageBase64[i]};  
        this.fileService.uploadByBase64(fileObj).subscribe(fileObj => {// 上传图片到服务器  
          alert("图片上传成功");  
        });  
      }
    }
  }
 
}