import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,App, } from 'ionic-angular';
import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 
import { HttpClient, } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {CommunityPage} from '../community/community';
import {TabsPage} from '../tabs/tabs';
// import { ActionSheetController } from "ionic-angular";
// import { ImagePicker,ImagePickerOptions} from '@ionic-native/image-picker/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { Camera, ImagePicker, Transfer } from "ionic-native";
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';
// import { File } from '@ionic-native/file/ngx';
import * as $ from 'jquery';


@IonicPage()
@Component({
  selector: 'page-commcreat',
  templateUrl: 'commcreat.html',
})
export class CommcreatPage {
  userid;
  textcontent:string;
  cover;
  arr=[];
  avatar: string = "";
  newlogo;
  logo:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
     public http:Http,public jsonp:Jsonp,
    public alertCtrl: AlertController,
    public appCtrl:App,
  ) {
  }





  setLogo(){
       this.upload1();
  }
  upload1(){
    let file=(<HTMLInputElement>document.getElementById('file')).files[0];
    console.log(file);

  }

commit(){
     //let content = (<HTMLInputElement>document.getElementById('con1'));
     let file=(<HTMLInputElement>document.getElementById('file')).files[0];
     let content =(<HTMLInputElement>document.getElementById('con1')).innerText;
     //console.log(file);

     this.cover=file;
     var temp="";
     let formData = new FormData();
      formData.append('cover',file);
      formData.append('content',content);
      console.log(formData);
  $.ajax({

    //几个参数需要注意一下
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "http://140.143.6.115:80/home/topic/store" ,//url
        data: formData,//$('#form1').serialize(),
        contentType: false,  
        processData: false,
        success: function (result) {
            console.log(result);//打印服务端返回的数据(调试用)
            // if (result.resultCode == 200) {
            //     alert("SUCCESS");
            // }
            // ;
            
        },
        error : function() {
            alert("异常！");
        }
    });
    //this.navCtrl.pop();
}
back(){
  this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
  //this.navCtrl.parent.selector(1);
  //this.navCtrl.push(CommunityPage);
   
}  


// setLogo(){
  //   this.upload1();
  //   this.logo=this.newlogo;
  // }
  
  // //上传
  // upload1(){
  //   this.userid=localStorage.getItem('userid');
  //   let file=(<HTMLInputElement>document.getElementById('file')).files[0];
  //   console.log(file);
  //   this.cover=file;
  //   var temp="";
  //   let formData = new FormData();
  //   formData.append('file',file);
  //   $.ajax({
  //     type: 'POST',
  //     url: 'http://140.143.6.115:80/home/topic/store',
  //     data: formData,
  //     async: false,
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     success: function (data) {
  //       console.log(data);
  //       temp=data;
  //       return temp;
  //     },
  //     error: function (err) {
  //       console.log(err);
  //     }
  //   });
  //   this.newlogo=temp;
  // }


// //
//   showPrompt() {
//     let prompt = this.alertCtrl.create({
//       title:'报修信息',
//       message: "提交成功",
   
//       buttons: ["确定"]
//     });
//      prompt.present();
//    }
//    commit(){
    
//     this.userid=localStorage.getItem('userid');
//     this.http.post('http://140.143.6.115:80/home/topic/store',({'user_id':this.userid,
//     'content':this.textcontent,/* "cover":this.cover */}))
//     .subscribe( 
//       data=>{

//         console.log(data);
//         this.arr=JSON.parse(data['_body']);
//         console.log(this.arr);
//         if(this.arr['code']==0){
//           this.showPrompt();
//           this.navCtrl.push(CommunityPage);
//         }

//   })
// }











//   presentActionSheet() {
//     let actionSheet = this.actionSheetCtrl.create({
//       buttons: [{
//         text: '拍照',
//         role: 'takePhoto',
//         handler: () => {
//           this.takePhoto();
//         }
//       }, {
//         text: '从相册选择',
//         role: 'chooseFromAlbum',
//         handler: () => {
//           this.chooseFromAlbum();
//         }
//       }, {
//         text: '取消',
//         role: 'cancel',
//         handler: () => {
//           console.log("cancel");
//         }
//       }]
//     });
// actionSheet.present().then(value => {

//       return value;
//     });
//   }
//   takePhoto() {
//     const options: CameraOptions = {
//       quality: 100,
//       allowEdit: true,
//       targetWidth: 200,
//       targetHeight: 200,
//       saveToPhotoAlbum: true,
//     };

//     this.camera.getPicture(options).then(image => {
//       console.log('Image URI: ' + image);
//       this.avatar = image.slice(7);
//     }, error => {
//       console.log('Error: ' + error);
//     });
//   }

//   chooseFromAlbum() {
//     const options: ImagePickerOptions = {
//       maximumImagesCount: 1,
//       width: 200,
//       height: 200
//     };
//     this.imagePicker.getPictures(options).then(images => {
//       if (images.length > 1) {
//         this.presentAlert();
//       } else if (images.length === 1) {
//         console.log('Image URI: ' + images[0]);
//         this.avatar = images[0].slice(7);
//       }
//     }, error => {
//       console.log('Error: ' + error);
//     });
//   }

//   presentAlert() {
//     let alert = this.alertCtrl.create({title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"]});
//     alert.present().then(value => {
//       return value;
//     });
//   }


}
