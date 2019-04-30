import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController,PopoverController } from 'ionic-angular';
import { CommentPage } from '../comment/comment';

/**
 * Generated class for the CommdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commdetail',
  templateUrl: 'commdetail.html',
})
export class CommdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,
    public jsonp:Jsonp,public modalCtrl:ModalController,public popoverCtrl: PopoverController,) {
      this.id=navParams.data['index'];
  }
  id;
  arr=[];
  arr2=[];
  idd;
  ionViewWillEnter(){
    this.http.get('http://140.143.6.115:80/home/topic/show?id='+this.id).subscribe( data=>{ 
      //console.log(typeof(data));
      //console.log(data);
      this.arr=(data['data']);
      //console.log(typeof(this.arr));//object
      //console.log(this.arr);

    })
    this.http.get('http://140.143.6.115:80/home/comment/index?state=published&topic_id='+this.id).subscribe( data=>{
      console.log(data);
      this.arr2=(data['data']);
      console.log('pinglun');

    })
  }
  
  //点击评论按钮
  openPopover(e){
    console.log('111');
    let popover = this.popoverCtrl.create(CommentPage
    ,{key1:this.id});
    popover.present({
      ev: e
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommdetailPage');
  }

}
