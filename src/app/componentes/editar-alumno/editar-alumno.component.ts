import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';
import{ CiscoService } from 'src/app/servicio/cisco.service';
import{Router,ActivatedRoute}from '@angular/router';
@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  formularioDeAlumnos:FormGroup;

  elID:any

  constructor(
    private activeteRoute:ActivatedRoute,
    private ciscoService:CiscoService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { 
    this.elID=this.activeteRoute.snapshot.paramMap.get('ID');
    console.log(this.elID);
    this.ciscoService.ObtenerAlumno(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeAlumnos.setValue({
          id:respuesta[0]['ID'],
          nombre:respuesta[0]['Nombre'],
          correo:respuesta[0]['Correo']
        });
      }
    );
    this.formularioDeAlumnos=this.formulario.group(
      {
        id:[''],
        nombre:[''],
        correo:['']
      }
    );
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeAlumnos.value);
    this.ciscoService.EditarAlumno(this.elID,this.formularioDeAlumnos.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/listar-alumno');

    });

  }
}
