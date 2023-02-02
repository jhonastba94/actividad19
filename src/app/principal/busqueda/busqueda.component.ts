import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';

import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //6. Consumir el servicio

  
  //6.1 CONSUMIR SERVICIO UserServices
  //Crear instancias de UserServices
  constructor(private userService: UserserviceService){}
//  Ejecutar el metodo getUSerAll del servicio al cargo el componente
resultado = true;
vista = false;
user!: Users | null;

getUserID(id: string){
  this.resultado = true;
  this.user = null;
  this.userService.getUserId(id).subscribe({
  next: (usuario: Users) => {this.user = usuario; this.vista = false;}
  ,
  error: (e) => {console.error(e); this.resultado = false;},
  complete: () => console.info("La API devolvio un registro")
  });
  }
  
  ngOnInit(){
  this.resultado = true;
  this.vista = true;
  }

}
