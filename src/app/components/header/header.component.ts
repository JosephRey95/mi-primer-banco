import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() { }


  Navegar(Destino) {
    this.route.navigate(["/login"])
  }


  atras() {
    this.route.navigate([sessionStorage.getItem("paginaAnterior")]);
  }

}
