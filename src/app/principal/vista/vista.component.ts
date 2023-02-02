import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  //3. CONSUMIR SERVICIO UserServices
  //Crear instancias de UserServices
  constructor(private userServices: UserserviceService){}
//4.  Ejecutar el metodo getUSerAll del servicio al cargo el componente
listado = new Array();

ngOnInit(){
  /*
  this.userServices.getUsersAll().subscribe({
  next: (UserAll: Users[]) => this.listado = UserAll,
  error: (e) => console.error(e),
  complete: () => console.info("La API devolcio todos los registros")
  });*/
  

  //clase 20 c. EJECUTAR METODO getUsersAll y recuperar json devuelto por la API
  //calse 20 d. Ejecutar el metodo getUsersAllInterceptor

  this.userServices.getUsersAllInterceptor().subscribe({
    next: (response: any) => {this.listado = response.body;
    console.log(response)},
    error: (e) => console.error(e),
    complete: () => console.info("La API devolcio todos los registros")
    });
  
  }
}

