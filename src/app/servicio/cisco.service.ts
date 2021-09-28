import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Alumno} from './Alumno';

@Injectable({
  providedIn: 'root'
})
export class CiscoService {
  API: string= 'http://localhost/prueba/'; //API DE php

  constructor(private clienteHttp:HttpClient) { }
//Datos del Alumno
  AgregarAlumno(datosAlumno:Alumno):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosAlumno);
  }
  ObtenerAlumnos(){
    return this.clienteHttp.get(this.API);
  }
  BorrarAlumno(ID:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+ID);
  }
  ObtenerAlumno(ID:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+ID);
  }
  EditarAlumno(ID:any,datosAlumno:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+ID,datosAlumno);

  }
}
