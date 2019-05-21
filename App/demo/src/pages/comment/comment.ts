import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,App,} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 
import { HttpClient, } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  template:/* Url: 'comment.html', */
    
    '<ion-textarea autofocus placeholder = "请输入评论:" rows="6" cols="20" [(ngModel)]="comment" (ionInput)="descript($event)" value="真棒！" > </ion-textarea>  <button ion-button round  color="#ffcc33;" style="width:70%;margin-left:7%;" class="btn3" (click)="commit()" small>发表评论</button>'

})
export class CommentPage {

  constructor(public app:App,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController ,
    public http:Http,public jsonp:Jsonp,public popoverCtrl: PopoverController,) {
      this.id = this.navParams.get('key1');
      console.log(this.id);
  }
  id;
  userid;
  arr=[];
  comment;
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title:'评论',
      message: "提交成功",
   
      buttons: ["确定"]
    });
     prompt.present();
   }
  descript(e){
    console.log(this.comment);
  }

  commit(){
    this.userid=localStorage.getItem('userid');
    this.http.post('http://188.131.192.194:83/home/comment/store',({
      'user_id':this.userid,
      'content':this.comment,
      'topic_id':this.id}))
    .subscribe( 
      data=>{

        console.log(data);
        this.arr=JSON.parse(data['_body']);
        console.log(this.arr);
        if(this.arr['code']==0){
          this.showPrompt();
          
        }

  })
}

}
