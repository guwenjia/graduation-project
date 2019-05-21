import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,App,} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient, } from '@angular/common/http';
import { HttpModule,JsonpModule,} from "@angular/http";
import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 


import { RegisterPage } from '../register/register';
import {ForgetpasswordPage} from '../forgetpassword/forgetpassword';
import { HomePage } from '../home/home';
import {TabsPage} from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ionViewWillEnter() {
    this.judge();
  }

  constructor(public app:App,public modalCtrl:ModalController,
    public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController ,public http:Http,public jsonp:Jsonp) {

  }
  userna:string;
  pas:string;
  arr=[];
  userID='';
  state:'';
  name;
    showPrompt0() {
      let prompt = this.alertCtrl.create({
        title: '登录',
        message: "用户名不存在",
     
        buttons: ["关闭"]
      });
       prompt.present();
     }
     
     showPrompt1() {
       let prompt = this.alertCtrl.create({
         title: '登录',
         message: "密码不正确",
      
         buttons: ["关闭"]
       });
        prompt.present();
      }
      showPrompt2(mess) {
        let prompt = this.alertCtrl.create({
          title:mess,
          message: "登陆成功",
       
          buttons: ["确定"]
        });
         prompt.present();
       }
judge(){
  if(localStorage.getItem('username')!==null){
    this.navCtrl.push( HomePage);
  }
  else return;
}

request(){
  /* if(this.userna==='' || this.pas===''){
      this.showPrompt0();
       return;
  } */
         //JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串
   this.http.post('http://188.131.192.194:83/auth/login',/* JSON.stringify */({'username':this.userna,'password':this.pas}))
    .subscribe( 
      data=>{
        console.log(data['_body']);
        //console.log(typeof(data['_body']));//string
        this.arr=JSON.parse(data['_body']);

       
      if(this.arr['code']==0){
       
        localStorage.setItem('userid',this.arr['logined_id']);//存到本地
        localStorage.setItem('username',this.arr['logined_username']);
        console.log("111");
        this.name=localStorage.getItem('username');
        this.showPrompt2(this.name);
        this.navCtrl.push( HomePage);
      }
      else{
        console.log('error');
        //this.showPrompt1();
        //this.navCtrl.push( HomePage);
      }
 

 //     else if(data!==null){
//        this.showPrompt1();
//      }/* else if(
//        localStorage.getItem("user") == data[0].logined_username){
//        this.navCtrl.push(TabsPage);
 //       this.app.getRootNavs()[0].setRoot(TabsPage);
 //     } */else{
 //       localStorage.setItem('user',data[0].logined_username);
       //this.navCtrl.push(TabsPage);
        //this.app.getRootNavs()[0].setRoot(TabsPage);
  //    }
    
    } 
    ); 
   


}



 
 goReg(){
    this.navCtrl.push(RegisterPage);
  }
  forgetpw(){
    this.navCtrl.push(ForgetpasswordPage);
  }
} 

