import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  corriente = {
    datos: [
      {
        nombre: 'cuenta 1',
        cuenta: '9507123412',
        estado: 'En mora',
        valor: '$200.000'
      },
      {
        nombre: 'cuenta 2',
        cuenta: '95071241341',
        estado: 'Al dia',
        valor: '$50.000'
      },
      {
        nombre: 'cuenta 3',
        cuenta: '3412341134',
        estado: 'Cerrada',
        valor: '$0'
      },
  
    ]
  }

  ahorros = {
    datos: [
      {
        nombre: 'Entidad 1',
        cuenta: '44534182718',
        valor:  "$2'000.000"
      },
      {
        nombre: 'Entidad 2',
        cuenta: '53874817341',
        valor: '$0'
      },
      {
        nombre: 'Entidad 3',
        cuenta: '451314132',
        valor: '$1.000'
      },
  
    ]
  }

  constructor() { }

  ngOnInit() {

  }

}
