import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  user;
  arr=[];
  arr1=[];
  arr2=[];
  arr3=[];
  type=['代取快递','家庭保洁','上门洗车'];
  typetitle=[];
  index11=[0,1,2];
  
  ionViewWillEnter() {
    this.getCon();
    this.getrepair();
    this.getsuggest();
    this.getservice()
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,
    public jsonp:Jsonp,public modalCtrl:ModalController,public appCtrl:App,private alertCtrl: AlertController,) {
  }
  showPrompt0() {
    let prompt = this.alertCtrl.create({
      message: "请先登录",
   
      buttons: ["关闭"]
    });
     prompt.present();
   }
  getCon(){ 
    this.user=localStorage.getItem('userid');
    if(!localStorage.getItem('userid')){
      this.showPrompt0();
      this.appCtrl.getRootNavs()[0].setRoot(LoginPage);
    }
    this.http.get('http://188.131.192.194:83/home/user/show?id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);
   
      console.log(this.arr);
    })

  }

  getrepair(){ 
    this.user=localStorage.getItem('userid');
    this.http.get('http://188.131.192.194:83/home/repair/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr1=(data['data']);
      console.log(this.arr1);
    })

  }

  getsuggest(){ 
    this.user=localStorage.getItem('userid');
    this.http.get('http://188.131.192.194:83/home/suggest/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr2=(data['data']);
      console.log(this.arr);
    })

  }

  getservice(){
    this.user=localStorage.getItem('userid');
    this.http.get('http://188.131.192.194:83/home/service/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr3=(data['data']);
      console.log(this.arr3);
     
      //服务类型判断
      for(var i=0;i<this.arr3.length;i++){
        console.log(this.arr3[i]['type']);
        if(this.arr3[i]['type']=='express'){this.typetitle[i]=this.type[0]}
        else if(this.arr3[i]['type']=='house_clean'){this.typetitle[i]=this.type[1]}
        else{this.typetitle[i]=this.type[2]}
    };
  })
}
setting(){
  this.appCtrl.getRootNavs()[0].setRoot(SettingPage);
  // let profileModal = this.modalCtrl.create(SettingPage);
  // profileModal.present();
}


}
