import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inscripcion',
    loadChildren: () => import('./inscripcion/inscripcion.module').then( m => m.InscripcionPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
