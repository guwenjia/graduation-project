import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,App, } from 'ionic-angular';
import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 
import { HttpClient, } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {SuggestPage} from '../suggest/suggest';

/**
 * Generated class for the SuggestcommitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggestcommit',
  templateUrl: 'suggestcommit.html',
})
export class SuggestcommitPage {

  userid;
  part;
  place;
  description;
  arr=[];
  arrived_at:string;

  constructor(public app:App,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController ,
    public http:Http,public jsonp:Jsonp,public appCtrl:App) {
      this.navParams.get('userid');
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
    this.http.post('http://188.131.192.194:83/home/suggest/store',({'user_id':this.userid,'type':this.part,'address':this.place/* this.place */,
    'image':'111','description':this.description,}))
    .subscribe( 
      data=>{

        console.log(data);
        this.arr=JSON.parse(data['_body']);
        console.log(this.arr);
        if(this.arr['code']==0){
          this.showPrompt();
          //this.navCtrl.pop();
        }

  })
}
back(){
  this.appCtrl.getRootNavs()[0].setRoot(SuggestPage);
}

}
