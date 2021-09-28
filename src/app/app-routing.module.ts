import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarAlumnoComponent } from './componentes/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';
import { ListarAlumnoComponent } from './componentes/listar-alumno/listar-alumno.component';

const routes: Routes = [

  {path: '',pathMatch:'full', redirectTo:'agregar-alumno'},
  {path: 'agregar-alumno',component:AgregarAlumnoComponent},
  {path: 'listar-alumno',component:ListarAlumnoComponent},
  {path: 'editar-alumno/id',component:EditarAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
