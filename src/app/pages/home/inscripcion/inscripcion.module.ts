import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscripcionPageRoutingModule } from './inscripcion-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { InscripcionPage } from './inscripcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InscripcionPageRoutingModule
  ],
  declarations: [InscripcionPage]
})
export class InscripcionPageModule {}
