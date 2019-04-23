import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifehousePage } from './lifehouse';

@NgModule({
  declarations: [
    LifehousePage,
  ],
  imports: [
    IonicPageModule.forChild(LifehousePage),
  ],
})
export class LifehousePageModule {}
