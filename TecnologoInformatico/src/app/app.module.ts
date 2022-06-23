
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticateService } from './service/authenticate.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
