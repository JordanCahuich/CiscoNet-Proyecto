import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { CiscoService } from 'src/app/servicio/cisco.service';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {
  Alumnos:any;

  constructor(
    private ciscoService:CiscoService
  ) { }

  ngOnInit(): void {
    this.ciscoService.ObtenerAlumnos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Alumnos=respuesta;
    });
  }
  borrarRegistro(ID:any, iControl:any){
    console.log(ID);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro")){
    this.ciscoService.BorrarAlumno(ID).subscribe((respuesta)=>{
      this.Alumnos.splice(iControl,1);

    });  
  }
  }

}
