import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PostitModule } from 'src/app/components/postit/postit.module';
import { PostitModalModule } from 'src/app/modals/postit-modal/postit-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PostitModule,
    PostitModalModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
