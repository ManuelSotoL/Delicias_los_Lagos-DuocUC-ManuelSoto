import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscomprasPageRoutingModule } from './miscompras-routing.module';

import { MiscomprasPage } from './miscompras.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscomprasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MiscomprasPage]
})
export class MiscomprasPageModule {}
