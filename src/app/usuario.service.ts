import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {UsuarioResponse} from "./model/usuario.response";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://52.149.236.51:8080';

  login(loginPayload) : Observable<UsuarioResponse> {
    return this.http.post<UsuarioResponse>('http://52.149.236.51:8080/' + 'auth', loginPayload);
  }

  constructor(private http: HttpClient) { }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUsuario(usuario: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);
  }

  updateUsuario(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsuarioList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}