import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';



@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  user;
  arr=[];

  ionViewWillEnter() {
    this.getCon();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,
    public jsonp:Jsonp,public modalCtrl:ModalController,) {
  }

  getCon(){ 
    this.user=localStorage.getItem('userid');
    this.http.get('http://140.143.6.115:80/home/user/show?id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);
      console.log(this.arr);
    })

  }





setting(){
  this.navCtrl.push(SettingPage);
}


}
