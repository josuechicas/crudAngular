import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app-routes';
import { NavbarComponent } from './shell/navbar/navbar.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UsuarioService} from './usuario.service';
import {ReactiveFormsModule} from "@angular/forms";

import {TokenInterceptor} from "./core/interceptor";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetalleUsuarioComponent,
    ListaUsuarioComponent,
    CrearUsuarioComponent,
    LoginComponent,
    ActualizarUsuarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
