import { Component, OnInit } from '@angular/core';
import { cabeceraInicio,seccionCambio} from "./datosHome";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cabecera :any []= cabeceraInicio;
seccionCambio:any=seccionCambio;

  constructor() { 
    window.scrollTo(0,0);
  }

  ngOnInit() {
  }

}
