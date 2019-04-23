import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {RepaircommitPage} from '../repaircommit/repaircommit';


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
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepairPage');
  }
    
  getCon(){ 
    this.user=localStorage.getItem('userid');
    this.http.get('http://140.143.6.115:80/home/repair/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);
      console.log(this.arr);
    })

  }

  openrepair(){
    this.navCtrl.push(RepaircommitPage);
  }
}
