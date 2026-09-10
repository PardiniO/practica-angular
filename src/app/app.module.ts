import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './features/bloque-a/components/perfil/perfil.component';
import { ContadorComponent } from './features/bloque-a/components/contador/contador.component';
import { AlumnoCardE5Component } from './features/bloque-b/components/ej-5/alumno-card-e5/alumno-card-e5.component';
import { AlumnoListaE5Component } from './features/bloque-b/components/ej-5/alumno-lista-e5/alumno-lista-e5.component';
import { AlertaE6Component } from './features/bloque-b/components/ej-6/alerta-e6/alerta-e6.component';
import { PadreAlertaE6Component } from './features/bloque-b/components/ej-6/padre-alerta-e6/padre-alerta-e6.component';
import { TablaE7Component } from './features/bloque-b/components/ej-7/components/tabla-e7/tabla-e7.component';
import { BuscadorE8Component } from './features/bloque-b/components/ej-8/buscador-e8/buscador-e8.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ContadorComponent,
    AlumnoCardE5Component,
    AlumnoListaE5Component,
    AlertaE6Component,
    PadreAlertaE6Component,
    TablaE7Component,
    BuscadorE8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
