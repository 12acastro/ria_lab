import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  private registrar () {
    console.log(this.form);
  }

  ngOnInit(): void {
  }

}
