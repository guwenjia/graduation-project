import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {RepaircommitPage} from '../repaircommit/repaircommit';
import {SuggestcommitPage} from '../suggestcommit/suggestcommit';
import { TabsPage } from '../tabs/tabs';
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

  constructor(public appCtrl:App,public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
  }
  getCon(){ 
    this.user=localStorage.getItem('userid');
    this.http.get('http://188.131.192.194:83/home/suggest/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);
      console.log(this.arr);
    })

  }

  openrepair(){
    this.appCtrl.getRootNavs()[0].setRoot(SuggestcommitPage);
  }
  back(){
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
  }
}
