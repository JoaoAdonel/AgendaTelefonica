import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatusPageRoutingModule } from './contatus-routing.module';

import { ContatusPage } from './contatus.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatusPageRoutingModule
  ],
  declarations: [ContatusPage]
})
export class ContatusPageModule {}
