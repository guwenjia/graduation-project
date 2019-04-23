import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,App, } from 'ionic-angular';
import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 
import { HttpClient, } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { LifeservicesPage } from '../lifeservices/lifeservices';

/**
 * Generated class for the LifehousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifehouse',
  templateUrl: 'lifehouse.html',
})
export class LifehousePage {


  constructor(public app:App,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController ,
    public http:Http,public jsonp:Jsonp,) {
  }
  userid;
  place;
  gaming;
  arrived_at;
  description;
  arr=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad LifehousePage');
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title:'生活服务',
      message: "提交成功",
   
      buttons: ["确定"]
    });
     prompt.present();
   }
  radio(e){
    //this.gaming=e.target.value;
    console.log(this.gaming);
  } 
  time(e){
    console.log(this.arrived_at)
  } 
  descript(e){
    console.log(this.description)
  }
  commit(){
    this.userid=localStorage.getItem('userid');
    this.http.post('http://140.143.6.115:80/home/service/store',({'user_id':this.userid,'type':this.gaming,'user_address':'111'/* this.place */,
    'arrived_at':this.arrived_at,'description':this.description}))
    .subscribe( 
      data=>{

        console.log(data);
        this.arr=JSON.parse(data['_body']);
        console.log(this.arr);
        if(this.arr['code']==0){
          this.showPrompt();
          this.navCtrl.push(LifeservicesPage);
        }

  })
}
}