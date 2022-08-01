import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfileItemComponent } from './profile-item.component';

@NgModule({
  declarations: [
    ProfileItemComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    ProfileItemComponent,
  ],
})
export class ProfileItemModule {}
