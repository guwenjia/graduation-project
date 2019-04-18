import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,) {
  }
  arr=[];
  index=0;
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementPage');
  }
  //获取推荐内容
   getCon(){
    this.http.get('http://140.143.6.115:80/home/notice/index?state=published' ).subscribe( data=>{ 
      this.arr=JSON.parse(data['data']);
      console.log(this.arr);
    } );


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



}
