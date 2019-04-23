import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {CommdetailPage} from '../commdetail/commdetail';
import { CommcreatPage } from '../commcreat/commcreat';
/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
  arr=[];
  arr1=[];
  index=0;

  ionViewWillEnter() {
    this.getCon();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
  }

  go(i){
    this.navCtrl.push('CommdetailPage',{index:this.arr[i].id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPage');
  }
  getCon(){
      this.http.get('http://140.143.6.115:80/home/topic/index?state=published' ).subscribe( data=>{ 
      this.arr=(data['data']);
      console.log(this.arr);
      /*  for(var i=0;i<this.arr.length;i++){
         this.arr[i].cover='http://140.143.6.115:80/'+data[i].cover;}
       */}); 
  }
  add(){
    this.navCtrl.push(CommcreatPage);
  }
}
