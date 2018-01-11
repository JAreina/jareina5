import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
titulo:String="Porfolio de actividades";
  constructor() {window.scrollTo(0,0); }

  ngOnInit() {
  }

}
