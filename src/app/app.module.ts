import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CvComponent } from './components/cv/cv.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { GoogleAnalyticsService } from "./service/google-analytics.service";
import { SliderComponent } from "./components/home/slider/slider.component";
import { SliderProyectosComponent } from './components/slider-proyectos/slider-proyectos.component';
import { ProyectosRealizadosComponent } from './components/proyectos-realizados/proyectos-realizados.component';
import { CorreoComponent } from './components/correo/correo.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    CvComponent,
    ProyectosComponent,
    HomeComponent,
    ProyectoComponent,
    SliderComponent,
    SliderProyectosComponent,
    ProyectosRealizadosComponent,
    CorreoComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
