import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule,JsonpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BeginPage } from '../pages/begin/begin';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyPage } from '../pages/my/my';
import { SettingPage } from '../pages/setting/setting';
import { CommunityPage } from '../pages/community/community';
import { LifeservicesPage } from '../pages/lifeservices/lifeservices';
import {ForgetpasswordPage} from '../pages/forgetpassword/forgetpassword';
import {AnnouncementPage} from '../pages/announcement/announcement';
import {RepairPage} from '../pages/repair/repair';
import {LifehousePage} from '../pages/lifehouse/lifehouse';
import {RepaircommitPage} from '../pages/repaircommit/repaircommit';
import {SuggestPage} from '../pages/suggest/suggest';
import {SuggestcommitPage} from '../pages/suggestcommit/suggestcommit';
import {CommcreatPage} from '../pages/commcreat/commcreat';
import {CommentPage} from '../pages/comment/comment';
//import {AnnoundetailPage} from '../pages/announdetail/announdetail';
//import {CommdetailPage} from '../pages/commdetail/commdetail';
import { Http,Jsonp} from "@angular/http"; 
import { PopoverController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BeginPage,//开始页
    LoginPage,//登录
    RegisterPage,//注册
    MyPage,
    SettingPage,
    CommunityPage,//社区
    LifeservicesPage,//生活服务
    ForgetpasswordPage,//忘记密码
    AnnouncementPage,//小区公告列表
    RepairPage,//坏事报修列表
    RepaircommitPage,//坏事报修提交
    //AnnoundetailPage,//公告详情
    //生活服务详情CommdetailPage,
    LifehousePage,//生活服务提交信息
    SuggestPage,//投诉建议
    SuggestcommitPage,////投诉建议提交信息
    CommcreatPage,//发表动态页
    CommentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    JsonpModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BeginPage,
    LoginPage,
    RegisterPage,
    MyPage,
    SettingPage,
    CommunityPage,
    LifeservicesPage,
    ForgetpasswordPage,
    AnnouncementPage,
    RepairPage,
    //AnnoundetailPage,
    //CommdetailPage,
    LifehousePage,
    RepaircommitPage,
    SuggestPage,
    SuggestcommitPage,
    CommcreatPage,
    CommentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
