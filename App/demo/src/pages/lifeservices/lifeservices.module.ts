import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeservicesPage } from './lifeservices';

@NgModule({
  declarations: [
    LifeservicesPage,
  ],
  imports: [
    IonicPageModule.forChild(LifeservicesPage),
  ],
})
export class LifeservicesPageModule {}
