import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { literal } from '@angular/compiler/src/output/output_ast';
import { AuthenticateService } from '../service/authenticate.service';
import { ClrPasswordModule } from '@clr/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    username :Text,
    email :Text,
    password :Text,
  }


  constructor(private AuthService:AuthenticateService) { }

  public registrarse (correo: string, contrasena: string, nickname: string, tipo: string) {
    this.AuthService.newRegistro(correo, contrasena, nickname).subscribe(
      function (data) {
        return alert(data);
      })  
  }

  public inicioDeSesion (username: string, password:string) {
    alert(username);
    this.AuthService.iniciarSesion(username, password).subscribe(
      data =>  {
        return alert(data.headers);
      })

  }

  ngOnInit(): void {
  }

}
