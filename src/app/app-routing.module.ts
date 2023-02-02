import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { VistaComponent } from './principal/vista/vista.component';
//1. Generar todas las rutas para el menu y las paginas que se desarrollo

const routes: Routes = [
  {path: 'vista', component: VistaComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'busqueda', component: BusquedaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
