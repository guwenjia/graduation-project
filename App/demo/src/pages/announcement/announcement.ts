import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {RepairPage} from '../repair/repair';
import {AnnoundetailPage} from '../announdetail/announdetail';


@IonicPage()
@Component({
  selector: 'page-announcement',
  templateUrl: 'announcement.html',
})
export class AnnouncementPage {

  ionViewWillEnter() {
    this.getCon();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
  }
  arr=[];
  index=0;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementPage');
  }
  
  go(idx){
      console.log(this.arr[idx].id);
      //localStorage.setItem('title',this.arr[idx].title);
       this.navCtrl.push('AnnoundetailPage',{myid:this.arr[idx].id});
       //在navCtrl.push的同时就传递给详情页组件数据，同时取名myid
       
     // let profileModal = this.modalCtrl.create('announdetailPage',{id:this.arr[idx].id});
     // profileModal.present();  
    }
  //获取列表
   getCon(){
    this.http.get('http://188.131.192.194:83/home/notice/index?state=published' ).subscribe( data=>{ 
      this.arr=(data['data']);
      console.log(this.arr);
    } );
  }
    
    

    
  }




