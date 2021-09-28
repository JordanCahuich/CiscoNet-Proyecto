import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';

import{ CiscoService } from 'src/app/servicio/cisco.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formularioDeAlumnos:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private ciscoService:CiscoService,
    private ruteador:Router
    ) {

    this.formularioDeAlumnos=this.formulario.group({

      id:[''],
      nombre:[''],
      correo:['']
      



    });
   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("Me presionaste");
    console.log(this.formularioDeAlumnos.value);
    this.ciscoService.AgregarAlumno(this.formularioDeAlumnos.value).subscribe();
    this.ruteador.navigateByUrl('/listar-alumno')


  }

}
