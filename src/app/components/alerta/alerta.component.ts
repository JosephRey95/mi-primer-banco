import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss'],
})
export class AlertaComponent implements OnInit {

  @Input() Titulo: string = "Información";
  @Input() Mensaje: string = "Error";
  @Input() BtnVisible: boolean = false;

  @Output() Visible = new EventEmitter<boolean>()
  public Ocultar: boolean = true
  constructor() { }
  ngOnInit() {
  }

  alerta() {
    this.Ocultar = !this.Ocultar
    this.Visible.emit(this.Ocultar);
  }

}
