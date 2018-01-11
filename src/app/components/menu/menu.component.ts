import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  iconoMenu:string;
  menu:string ="hidden";
  constructor() { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.iconoMenu = "hidden";
    this.menu=""
  }
  ocultarMenu(){
  this.iconoMenu = "";
  this.menu="hidden";
  }
}
