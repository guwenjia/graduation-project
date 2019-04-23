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
 /*  id;
  place;
  val={
    title:'',
    sImg:'',
    keywords:'',
    comments:''
  };

  val2=new Array();
  len;
  host='140.143.6.115';
 */
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
       this.navCtrl.push('AnnoundetailPage',{myid:this.arr[idx].id});//在navCtrl.push的同时就传递给详情页组件数据，同时取名myid
       

     // let profileModal = this.modalCtrl.create('announdetailPage',{id:this.arr[idx].id});
     // profileModal.present();  
    }
  //获取列表
   getCon(){
    this.http.get('http://140.143.6.115:80/home/notice/index?state=published' ).subscribe( data=>{ 
      this.arr=(data['data']);
      console.log(this.arr);
    } );
  }
    

    /* let url:string='http://'+this.host+':80/home/notice/index?state=published';
    this.http.get(url)
    .subscribe(
      (data:any) =>{
      this.val2 = data['data'];
      console.log(data);
      for(var i=0;i<this.val2.length;i++){
      this.val2[i].cover='http://'+this.host+':8080'+data.data[i].cover;
      } 
    }); */
    

    
  }



