import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController,App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChangeinfoPage } from '../changeinfo/changeinfo';
import { MyPage } from '../my/my';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
   public viewCtrl: ViewController,public appCtrl:App) {
  }
  back(){
      // this.viewCtrl.dismiss();
      //this.navCtrl.pop();
      this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
  }

  items = [
    "修改个人信息",
    "修改密码",
    "问题反馈",
    "关于",
  ];
  fbtn(item){
    if (item == "修改个人信息") {
      this.appCtrl.getRootNavs()[0].setRoot(ChangeinfoPage);
      //this.navCtrl.push('ChangeinfoPage');
      // let profileModal = this.modalCtrl.create(ChangeinfoPage);
      // profileModal.present();
    }
    else if (item == "修改密码") {
      //this.navCtrl.push('ForgetpasswordPage');
    }
    else if (item == "问题反馈") {
     // this.navCtrl.push('CallbackPage');
    }
    else if (item == "关于") {
      //this.navCtrl.push('AboutPage');
    }
  }
  clear(){
    localStorage.clear();
    this.appCtrl.getRootNavs()[0].setRoot(LoginPage);
   // this.navCtrl.push(BeginPage);
  }
}

