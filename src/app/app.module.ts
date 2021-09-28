import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarAlumnoComponent } from './componentes/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';
import { ListarAlumnoComponent } from './componentes/listar-alumno/listar-alumno.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    ListarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
