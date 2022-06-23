import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  public newRegistro (correo: string, contrasena: string, nickname: string): Observable<any> {
    let persona = {
      "username": nickname,
      "email": correo,
      "password": contrasena,
    }; 
    return this.http.post("https://ria2022.test.softtero.com/api/Authenticate/register", persona);
  }

  public iniciarSesion(username:	string, password:	string): Observable<any> {
    let persona = {
      "username": username,
      "password": password
    };
    return this.http.post("https://ria2022.test.softtero.com/api/Authenticate/login", persona);
  }
 
} 
