import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {CommdetailPage} from '../commdetail/commdetail';
import { CommcreatPage } from '../commcreat/commcreat';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
  val=[];
  arr1=[];
  index=0;

  ionViewWillEnter() {
    this.getCon();
  }
  constructor(public appCtrl:App,public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
  }

  go(i){
    this.navCtrl.push('CommdetailPage',{index:this.val[i].id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPage');
  }
  getCon(){
      this.http.get('http://188.131.192.194:83/home/topic/index?state=published' ).subscribe( data=>{ 
      this.val=(data['data']);
      console.log(this.val);
      }); 
  }
  add(){
    
    //this.navCtrl.push(CommcreatPage);
     this.appCtrl.getRootNavs()[0].setRoot(CommcreatPage);
    // let profileModal = this.modalCtrl.create(CommcreatPage);
    // profileModal.present();
  }
  back(){

    this.appCtrl.getRootNav().setRoot(HomePage);
  }
}
