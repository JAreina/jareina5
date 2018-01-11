import { Component, OnInit } from '@angular/core';
import {datosProyectos} from '../../../datos/datosProyectos'


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
  
})
export class ProyectoComponent  {

datos:any[]=datosProyectos;
urlPage :any;

               
   }




