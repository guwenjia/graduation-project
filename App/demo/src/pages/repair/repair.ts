import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {RepaircommitPage} from '../repaircommit/repaircommit';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-repair',
  templateUrl: 'repair.html',
})
export class RepairPage {
  arr=[];
  id;
  user;
  ionViewWillEnter() {
    this.getCon();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,
    public jsonp:Jsonp,public modalCtrl:ModalController,public appCtrl:App) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepairPage');
  }
    
  getCon(){ 
    this.user=localStorage.getItem('userid');
    this.http.get('http://188.131.192.194:83/home/repair/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);
      console.log(this.arr);
    })

  }

  openrepair(){
    this.appCtrl.getRootNavs()[0].setRoot(RepaircommitPage);
  }
  back(){
    this.appCtrl.getRootNav().setRoot(TabsPage);
  }
}
