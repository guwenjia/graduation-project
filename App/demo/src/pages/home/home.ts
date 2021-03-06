import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
//import { ContentPage } from '../content/content';
//import { NewslistPage } from '../newslist/newslist';
//import { ThumbsupPage } from '../thumbsup/thumbsup';
import { AnnouncementPage } from '../announcement/announcement';//小区公告page
import {RepairPage} from '../repair/repair';//坏事报修
import {SuggestPage} from '../suggest/suggest';
import {TabsPage} from '../tabs/tabs';
import { LoginPage } from '../login/login';
// import { HttpClient, } from '@angular/common/http';
// import { HttpModule,JsonpModule,} from "@angular/http";
// import { Http,Jsonp,Headers,RequestOptions } from "@angular/http"; 

//@Component({
//    selector: 'page-home',
//    templateUrl: 'home.html'
//})
//  export class HomePage {
//    @ViewChild(Slides) slides: Slides;
//    items = [];
//    constructor(public platform: Platform,
//      public appCtrl: App,
//      public toastCtrl: ToastController,public modalCtrl:ModalController,public navCtrl: NavController,private http: HttpClient) {
//        this.platform.ready().then(() => {
//          this.registerBackButtonAction(null);
//        });
//        this.getLocation();
//    }
//    ionViewWillEnter() {
//      this.getlun();
//      this.getAd();
//      this.getCon();
//    }
//    ad=new Array();
//    val=new Array();
//    lunbo=new Array();
//    len;
//    host='35.194.153.183';
//    typeId='HJMQ4wCJQ';
//    location;
//    //获取定位
//    getLocation(){
//      let url:string='http://api.map.baidu.com/location/ip?ak=yvuRyfeZeWrT6KxGgGK5G5MU1bI4L8tf&coor=bd09ll&callback=jsonpCallback';
//  this.http.jsonp(url,'callback').subscribe(
//    (data:any)=>{
//      let city:any=data.content.address_detail.city;
//      this.location=city;
//    });
//    }
//  //获取广告
//    getAd(){
//    let url:string='http://'+this.host+':8080/api/content/getList?typeId='+this.typeId;
//    this.http.get(url)
//    .subscribe(
//    (data:any) =>{
//      this.ad = data['docs'];
//      //console.log(data);
//     for(var i=0;i<this.ad.length;i++){
//      this.ad[i].sImg='http://'+this.host+':8080'+data.docs[i].sImg;
//      }
//    });
//  }
//  //获取首页推荐内容
//    getCon(){
//      let tagName="首页推荐";
//      let url:string='http://'+this.host+':8080/api/content/getList?tagName='+tagName;
//    this.http.get(url)
//    .subscribe(
//    (data:any) =>{
//      this.val = data['docs'];
//      //console.log(data);
//     for(var i=0;i<this.val.length;i++){
//      this.val[i].sImg='http://'+this.host+':8080'+data.docs[i].sImg;
//
//      }
//    });
//    }
//    //获取轮播图
//    getlun(){
//      let tagName="轮播图";
//      let url:string='http://'+this.host+':8080/api/content/getList?tagName='+tagName;
//    this.http.get(url)
//    .subscribe(
//    (data:any) =>{
//      this.lunbo = data['docs'];
//      //console.log(data);
//      this.len=this.lunbo.length;
//     for(var i=0;i<this.lunbo.length;i++){
//      this.lunbo[i].sImg='http://'+this.host+':8080'+data.docs[i].sImg;
//      }
//    });
//    }
//
//     //控制硬件返回按钮是否触发，默认false
//     backButtonPressed: boolean = false;
//    //注册方法
//    registerBackButtonAction(tabRef: Tabs): void {
//
//      //registerBackButtonAction是系统自带的方法
//      this.platform.registerBackButtonAction(() => {
//        //获取NavController
//        let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
//        //如果可以返回上一页，则执行pop
//        if (activeNav.canGoBack()) {
//          activeNav.pop();
//        } else {
//          if (tabRef == null) {
//            //执行退出
//            this.showExit();
//          } else {
//            //选择首页第一个的标签
//            tabRef.select(0);
//          }
//        }
//      });
//    }
//    //退出应用方法
//    showExit() {
//      //如果为true，退出
//      if (this.backButtonPressed) {
//        this.platform.exitApp();
//      } else {
//          //第一次按，弹出Toast
//          this.toastCtrl.create({
//              message: '再按一次退出应用',
//              duration: 2000,
//              position: 'bottom'
//          }).present();
//        //标记为true
//        this.backButtonPressed = true;
//        //两秒后标记为false，如果退出的话，就不会执行了
//        setTimeout(() => this.backButtonPressed = false, 2000);
//      }
//    }
//  //搜索
//  search(){
//    this.navCtrl.push('SearchPage');
//  }
//  //跳转
//  content(id){
//    this.navCtrl.push('ClicktextPage',{textId:id});
//  }
//
//  openlist(){
//    this.navCtrl.push('NewslistPage');
//  }
//}




@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(Slides) slides: Slides;
items = [];
arr=[];
ionViewWillEnter() {
  this.gettabs();
  //this. getCon();
}
constructor(public platform: Platform,
    public appCtrl: App,
    public toastCtrl: ToastController,public modalCtrl:ModalController,public navCtrl: NavController,
    /* public http:Http,public jsonp:Jsonp */) {
      this.platform.ready().then(() => {
        this.registerBackButtonAction(null);
      });
}
gettabs(){
  this.navCtrl.setRoot(TabsPage);
  if(!localStorage.getItem('userid')){
    this.appCtrl.getRootNavs()[0].setRoot(LoginPage);
  }
}  


//控制硬件返回按钮是否触发，默认false
   backButtonPressed: boolean = false;
//注册方法
registerBackButtonAction(tabRef: Tabs): void {
    
    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
      //如果可以返回上一页，则执行pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        if (tabRef == null) {
          //执行退出
          this.showExit();
        } else {
          //选择首页第一个的标签
          tabRef.select(0);
        }
      }
    });
}
//退出应用方法
showExit() {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'bottom'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
}

//下拉加载
//doInfinite(infiniteScroll) {
//  console.log('Begin async operation');

//  setTimeout(() => {
//        title:'香港 | 拿上这份徒步攻略',
//        img:'assets/imgs/index-thumbnail2.png',
//        title2:'不要以为这又是一次shopping之旅',
//        count:'22727次浏览',
//        btn:'攻略'
//      },
//      {
//        title:'有哪些地方可以拍出不一样的重庆？',
//        img:'assets/imgs/index-thumbnail1.png',
//        title2:'史上最全的27个机位，让你看到一个更全面的重庆',
//        count:'22727次浏览',
//        btn:'问答'
//      },
//      {
//        title:'有哪些地方可以拍出不一样的重庆？',
//        img:'assets/imgs/index-thumbnail1.png',
//        title2:'史上最全的27个机位，让你看到一个更全面的重庆',
//        count:'22727次浏览',
//        btn:'问答'
//      });

//    infiniteScroll.complete();
//    if(this.items.length==9){
//      console.log(this.items.length);
//      infiniteScroll.enable(false);
//    }
//  }, 500);
//}

//轮播图
ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop=true;
    this.slides.autoplay=1000;
}

//  //获取列表
//  getCon(){
//   this.http.get('http://140.143.6.115:80/home/notice/index?state=published' ).subscribe( data=>{ 
//     this.arr=(data['data']);
//     console.log(this.arr);
//   } );
// }


annou(){
  console.log("go Announcement");
  this.navCtrl.push(AnnouncementPage);//跳转到小区公告页
}
repair(){
  console.log("go repair");
  
  this.navCtrl.push(RepairPage);//跳转到坏事报修页
}
suggest(){
  this.navCtrl.push(SuggestPage);
}
}