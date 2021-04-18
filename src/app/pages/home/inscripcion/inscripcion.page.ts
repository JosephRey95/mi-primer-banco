import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {

  public Alias: string;
  public Entidad: string;
  public tipoCuenta: string;
  public nCuenta: string;
  public identificacion: string;
  public moneda: string;
  public datosCount ={};
  message: string;

  public Titulo: string;
  public Mensaje: string;
  public AlertaPersonalizada: boolean = false;
  public BtnInvisible: boolean = true;
  
  constructor(private route: Router) {}

  ngOnInit() {
    this.AlertaPersonalizada = false;
  }

  guardar() {
    //this.spiner.show(); 
    if (this.Alias == undefined ) {
      let Titulo = "Información";
      let Mensaje = "Campo de alias vacío";
      this.alerta(Titulo, Mensaje, true);
    }
    else if(this.Entidad == null){
      let Titulo = "Información";
      let Mensaje = "Campo de entidad vacío";
      this.alerta(Titulo, Mensaje, true);
    }
    else if(this.tipoCuenta == null){
      let Titulo = "Información";
      let Mensaje = "Debes seleccionar el tipo de cuenta";
      this.alerta(Titulo, Mensaje, true);
    }
    else if(this.nCuenta == null){
      let Titulo = "Información";
      let Mensaje = "Campo de número de cuenta vacío";
      this.alerta(Titulo, Mensaje, true);
    }
    else if(this.identificacion == null){
      let Titulo = "Información";
      let Mensaje = "Campo de documento vacío";
      this.alerta(Titulo, Mensaje, true);
    }  
    else if(this.moneda == null){
      let Titulo = "Información";
      let Mensaje = "Campo de moneda vacío";
      this.alerta(Titulo, Mensaje, true);
    }  
    
    else if(this.nCuenta.length > 11 || this.nCuenta.length < 11){
      let Titulo = "Información";
      let Mensaje = "El número de la cuenta debe tener 11 números";
      this.alerta(Titulo, Mensaje, true);
    }
    else if(this.identificacion.length > 12 || this.identificacion.length < 12){
      let Titulo = "Información";
      let Mensaje = "El número de la identificacion debe tener 12 números";
      this.alerta(Titulo, Mensaje, true);
    }
    else{
      this.datosCount = {
        datos:[
          {
            cAlias: this.Alias,
            cEntidad: this.Entidad,
            cTipoCuenta: this.tipoCuenta,
            cNumCuenta: this.nCuenta,
            cNumIdentificacion: this.identificacion,
            cMoneda: this.moneda,
          }
        ]
      }
      localStorage.setItem('DatoCuentas', JSON.stringify(this.datosCount));

      var data = JSON.parse(localStorage.getItem("DatoCuentas"));

      console.log(data);

    }
  }

  alerta(Titulo, Mensaje, BtnInvisible) {
    this.Titulo = Titulo;
    this.Mensaje = Mensaje;
    this.BtnInvisible = BtnInvisible;
    this.AlertaPersonalizada = true;
  }

}
