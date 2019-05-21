import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import  * as $ from 'jquery';
import { Http } from '@angular/http';
import { SettingPage } from '../setting/setting';
/**
 * Generated class for the ChangeinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changeinfo',
  templateUrl: 'changeinfo.html',
})
export class ChangeinfoPage {

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public http:Http,public appCtrl:App) {
    
  }
  
user;
arr=[];
  introduction:string;
  address:string;
  userName;
  gender: string;
  email:string;
  phone:string;
  logo:string;
  bgLogo:string;
  newlogo;
  newbg;
  cover;
  cover2;
  showPrompt0() {
    let prompt = this.alertCtrl.create({
      message: "请先登录",
   
      buttons: ["关闭"]
    });
     prompt.present();
   }
  ionViewWillEnter() {
    this.getInfo();
  }
  getInfo(){
    this.user=localStorage.getItem('userid');
    this.http.get('http://188.131.192.194:83/home/user/show?id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);})
    
  }


  setLogo(){
    this.upload1();
    this.logo=this.newlogo;
  }
  upload1(){
    let file=(<HTMLInputElement>document.getElementById('file')).files[0];
    console.log(file);

  }


  send(){
    let userid=localStorage.getItem('userid');
    let username=localStorage.getItem('username');
    let address=localStorage.getItem('address');
    let file=(<HTMLInputElement>document.getElementById('file')).files[0];
    let introduction =this.introduction;
    let phone =this.phone;
    let temp="";
    let formData = new FormData(); //创建了一个空的 FormData 对象：
    formData.append('id',userid);  //通过 FormData.append 往对象里加入键值对：
    formData.append('username',username);
     formData.append('avatar_url',file);
     formData.append('address',address);
     formData.append('introduction',introduction);
     console.log(formData);
     $.ajax({
          type: "POST",//方法类型
          dataType: "json",//预期服务器返回的数据类型
          url: "http://188.131.192.194:83/home/user/edit" ,//url
          data: formData,//$('#form1').serialize(),
          contentType: false,  
          processData: false,
          success: function (result) {
              console.log(result);//打印服务端返回的数据(调试用)    
          },
          error : function() {
              alert("异常！");
          }
      });
      this.appCtrl.getRootNavs()[0].setRoot(SettingPage);
  }

  back(){
    this.appCtrl.getRootNavs()[0].setRoot(SettingPage);
    //this.navCtrl.pop();
  }
  

}
