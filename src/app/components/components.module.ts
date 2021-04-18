import { TabsComponent } from './tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AlertaComponent } from './alerta/alerta.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TabsComponent,
    HeaderComponent,
    AlertaComponent
  ],
  exports: [
    TabsComponent,
    HeaderComponent,
    AlertaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
