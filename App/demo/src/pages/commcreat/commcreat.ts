import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,App, } from 'ionic-angular';
import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 
import { HttpClient, } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {CommunityPage} from '../community/community';

/**
 * Generated class for the CommcreatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commcreat',
  templateUrl: 'commcreat.html',
})
export class CommcreatPage {
  userid;
  textcontent:string;
  cover="1";
  arr=[];


  constructor(public app:App,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController ,
    public http:Http,public jsonp:Jsonp,) {
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title:'报修信息',
      message: "提交成功",
   
      buttons: ["确定"]
    });
     prompt.present();
   }
   commit(){
    
    this.userid=localStorage.getItem('userid');
    this.http.post('http://140.143.6.115:80/home/topic/store',({'user_id':this.userid,
    'content':this.textcontent,"cover":this.cover}))
    .subscribe( 
      data=>{

        console.log(data);
        this.arr=JSON.parse(data['_body']);
        console.log(this.arr);
        if(this.arr['code']==0){
          this.showPrompt();
          this.navCtrl.push(CommunityPage);
        }

  })
}
}
