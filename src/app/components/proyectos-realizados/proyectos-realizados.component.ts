import { Component, OnInit, ViewChild } from '@angular/core';
import {datos,datosProyectos} from './datosProyectos';
import { SliderProyectosComponent } from '../slider-proyectos/slider-proyectos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos-realizados.component.html',
  styleUrls: ['./proyectos-realizados.component.css'],
  providers:[SliderProyectosComponent]
})
export class ProyectosRealizadosComponent implements OnInit {
  cabecera :any= datos;
  datos:any=datosProyectos;
  
  constructor(public r:Router, public slider:SliderProyectosComponent) { 

  }

  ngOnInit() {
  }


}
