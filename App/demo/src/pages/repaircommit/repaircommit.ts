import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,App, } from 'ionic-angular';
import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 
import { HttpClient, } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {RepairPage} from '../repair/repair';
/**
 * Generated class for the RepaircommitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repaircommit',
  templateUrl: 'repaircommit.html',
})

export class RepaircommitPage {
  userid;
  part;
  place;
  description;
  arr=[];
  arrived_at:string;

  


ionViewWillEnter() {
  this.getdate();
}

constructor(public app:App,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController ,
    public http:Http,public jsonp:Jsonp,) {
}
getdate(){
  this.arrived_at = new Date().toISOString();
}
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title:'报修信息',
      message: "提交成功",
   
      buttons: ["确定"]
    });
     prompt.present();
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RepaircommitPage');
  }
  commit(){
    
    this.userid=localStorage.getItem('userid');
    this.http.post('http://140.143.6.115:80/home/repair/store',({'user_id':this.userid,'part':this.part,'address':this.place/* this.place */,
    'image':'111','description':this.description,'repair_time':this.arrived_at}))
    .subscribe( 
      data=>{

        console.log(data);
        this.arr=JSON.parse(data['_body']);
        console.log(this.arr);
        if(this.arr['code']==0){
          this.showPrompt();
          this.navCtrl.push(RepairPage);
        }

  })
}
}
