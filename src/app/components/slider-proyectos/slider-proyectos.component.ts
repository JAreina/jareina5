import { Component, OnInit,OnDestroy } from "@angular/core";
import { datosProyectosSlider } from "./datos-slider-proyectos";

import {ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-slider-proyectos",
  templateUrl: "./slider-proyectos.component.html",
  styleUrls: ["./slider-proyectos.component.css"]
})
export class SliderProyectosComponent implements OnInit,OnDestroy {
  url: string;
  fondo: string;
  proyectos: any[]=datosProyectosSlider;
  totalIds: number;
  idActual: number;
  finInterval: any;
  proyecto: any[];
  proyectoAux: any[];
 idProyecto :number;
 num:number;

 titulo:string="";
nombre:String;
descripcion:string;

animacion:String;

  constructor(public r:ActivatedRoute) {
    //window.setTimeout(()=> //this.cambiarUrlBackground(),1000);
  window.scrollTo(0,0);
  }

    slider(id:number){
      
      this.cambiarUrlBackground(id);
    }

    
ngOnDestroy(){

  this.pararIntervalo();
}




  ngOnInit() {
    this.r.params.subscribe(
      params => {
         this.num = parseInt(params['id']);
       
      })
      this.slider(this.num);
     
  }

  cambiarUrlBackground(id:number) {




     for(let i =0;i<=this.proyectos.length;i++){
              if(id == i){
                this.proyecto = this.proyectos[i];
                this.totalIds= this.proyecto.length;
                this.titulo= this.proyecto[i].tituloProyecto;
             
                //da undefined  resolver
                if(this.num ==1)
                this.titulo= "Gestión de Recibos";
             
              }
     }
    
    this.finInterval = setInterval(() => {

   this.animacion="animated fadeIn";

      this.idActual = Math.floor(Math.random() * this.totalIds);

if(this.idActual !=0){
    this.url = this.proyecto[this.idActual].urlLogo;

     
    

this.fondo = `url( ${this.url})`;
    
         


    
         this.nombre= 
         this.url = this.proyecto[this.idActual].nombre;
    
         this.descripcion= 
         this.url = this.proyecto[this.idActual].descripcion;
    
    
          for (let i = 0; i < this.proyecto.length; i++) {
            this.proyectoAux = [];
            
            this.proyectoAux.push(this.proyecto[this.idActual]);
          }
  
        }     

    }, 1300);
  }

  pararIntervalo() {
    clearInterval(this.finInterval);
    
  }
  reanudarIntervalor() {
    this.cambiarUrlBackground(this.num);
  }
}
