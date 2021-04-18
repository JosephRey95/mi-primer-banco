import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  public password: string;
  public user: string;
  message: string;

  public Titulo: string;
  public Mensaje: string;
  public AlertaPersonalizada: boolean = false;
  public BtnInvisible: boolean = true;

  constructor(private route: Router) {
  }

  ngOnInit() {

    this.AlertaPersonalizada = false;
  

}    
  login() {
    //this.spiner.show(); 
    if (this.password == undefined ) {
      let Titulo = "Información";
      let Mensaje = "Campo de clave vacío";
      this.alerta(Titulo, Mensaje, true);
    }else if(this.user == null){
      let Titulo = "Información";
      let Mensaje = "Campo de documento vacío";
      this.alerta(Titulo, Mensaje, true);
    }else if(this.user == '1070016113' && this.password=='12345'){
      this.route.navigate(["/home/inicio"])
    }else {
      let Titulo = "Información";
      let Mensaje = "Datos incorrectos";
      this.alerta(Titulo, Mensaje, true);
    }
    
    
  }

  alerta(Titulo, Mensaje, BtnInvisible) {
    this.Titulo = Titulo;
    this.Mensaje = Mensaje;
    this.BtnInvisible = BtnInvisible;
    this.AlertaPersonalizada = true;
  }
}


