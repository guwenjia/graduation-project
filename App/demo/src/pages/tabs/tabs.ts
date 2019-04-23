import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BeginPage } from '../begin/begin';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { MyPage } from '../my/my';
import { SettingPage } from '../setting/setting';
import { CommunityPage } from '../community/community';
import { LifeservicesPage } from '../lifeservices/lifeservices';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CommunityPage;
  tab3Root = LifeservicesPage;
  tab4Root = MyPage;
  constructor() {

  }
}
