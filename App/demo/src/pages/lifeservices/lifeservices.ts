 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { HttpClient,} from "@angular/common/http";
import { Http,Jsonp, Headers} from '@angular/http'; 
import { ModalController } from 'ionic-angular';
import {LifehousePage} from '../lifehouse/lifehouse';
import { HomePage } from '../home/home';
/**
 * Generated class for the LifeservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifeservices',
  templateUrl: 'lifeservices.html',
})
export class LifeservicesPage {
  ionViewWillEnter() {
    this.getCon();
  }
  constructor(public appCtrl:App,public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,public jsonp:Jsonp,public modalCtrl:ModalController,) {
  }
  arr=[];
  index=[0,1,2];
  index2=[0,1];
  user;
  type=['代取快递','家庭保洁','上门洗车'];
  statelist=['服务已完成','信息已被物业接收'];
  typetitle=[];
  state=[];
  getCon(){
    this.user=localStorage.getItem('userid');
    this.http.get('http://188.131.192.194:83/home/service/index?user_id='+this.user)
    .subscribe( data=>{ 

      this.arr=(data['data']);
      console.log(this.arr);
     
      //服务类型判断
      for(var i=0;i<this.arr.length;i++){
        console.log(this.arr[i]['type']);
        if(this.arr[i]['type']=='express'){this.typetitle[i]=this.type[0]}
        else if(this.arr[i]['type']=='house_clean'){this.typetitle[i]=this.type[1]}
        else{this.typetitle[i]=this.type[2]}
    };
/*      for(var j=0;j<this.arr.length;j++){
        console.log(this.arr[j]['state']);
        if(this.arr[j]['state']=='finish'){
          this.state[j]=this.statelist[0]
          
        }
        else{this.state[j]=this.statelist[1]}
        
     } */
    
  } );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeservicesPage');
  }


  openlist(){
    //this.navCtrl.push(LifehousePage);
    this.appCtrl.getRootNavs()[0].setRoot(LifehousePage);
  }
  back(){
    this.appCtrl.getRootNavs()[0].setRoot(HomePage);
  }

}
