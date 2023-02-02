import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  // 2. Crear una instancia de HttpClient
  constructor(private http: HttpClient) { }

  //Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)
  // Construir una variable que me permita acceder a la URL

  apiUser = environment.apiURL+ 'albums/';

  //Metodos GET para obtener los datos de la API users

  getUsersAll():Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUser);

  }
//5. Busqueda del usuario por ID construimos el metodo
//getUserId(){}

getUserId(userId: string):Observable<Users>{
  //5.1 construir una URL
  const url = this.apiUser + userId;
  return this.http.get<Users>(url);

}

//7.1 Metodo POST para enviar datos a la API users

postUser(usuario: Users):Observable<Users>{
  return this.http.post<Users>(this.apiUser, usuario);
}
//Interceptor
//clase 20 b. crear metodo GET para el interceptor(any porque no sabemos que recibir)
getUsersAllInterceptor():Observable<any> {
  return this.http.get(this.apiUser, {observe: 'response'});

}

}
