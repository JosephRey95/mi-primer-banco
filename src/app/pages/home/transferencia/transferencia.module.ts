import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferenciaPageRoutingModule } from './transferencia-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TransferenciaPage } from './transferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TransferenciaPageRoutingModule
  ],
  declarations: [TransferenciaPage]
})
export class TransferenciaPageModule {}
