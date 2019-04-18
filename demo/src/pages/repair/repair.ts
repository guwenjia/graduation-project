import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-repair',
  templateUrl: 'repair.html',
})
export class RepairPage {

  id;
  place;
  val={
    title:'',
    content:'',
    cover:'',
    published_at:''
  };
  //ids=[1,2,3];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    //this.id=this.ids[0];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepairPage');
    let host='140.143.6.115';
    let url:string='http://'+host+':80/home/notice/show/{id}?'+this.id;
    this.http.get(url)
    .subscribe(
    data =>{
      this.val = data['data'];
      //this.val.cover='http://'+host+':8080'+data['doc'].cover;
      console.log(data);
      //console.log(this.val.sImg);
      console.log(this.id);
    });




  }

}
