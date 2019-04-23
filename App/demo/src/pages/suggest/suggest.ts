import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {RepaircommitPage} from '../repaircommit/repaircommit';
import {SuggestcommitPage} from '../suggestcommit/suggestcommit';
/**
 * Generated class for the SuggestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggest',
  templateUrl: 'suggest.html',
})
export class SuggestPage {

  arr=[];
  id;
  user;
  ionViewWillEnter() {
    this.getCon();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
  }
  getCon(){ 
    this.user=localStorage.getItem('userid');
    this.http.get('http://140.143.6.115:80/home/suggest/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);
      console.log(this.arr);
    })

  }

  openrepair(){
    this.navCtrl.push(SuggestcommitPage);
  }
}
