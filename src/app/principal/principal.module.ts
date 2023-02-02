import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent
  ]
})
export class PrincipalModule { }
