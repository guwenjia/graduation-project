import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the AnnoundetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-announdetail',
  templateUrl: 'announdetail.html',
})
export class AnnoundetailPage {
  arr=[];
  myid;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
    //this.myid = navParams.get("myid");//通过navParams.get("名称")的语法形式，即可将数据获取
   this.myid = navParams.get("myid");
    console.log(this.myid);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoundetailPage');
  }
  ionViewWillEnter(){
      this.http.get('http://188.131.192.194:83/home/notice/show?id='+this.myid).subscribe( data=>{ 
      this.arr=(data['data']);
      console.log(this.arr);
    } );

  }

}
