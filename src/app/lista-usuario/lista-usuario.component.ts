import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { UsuarioService } from "../usuario.service";
import { Usuario } from "../usuario"
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaUsuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: Observable<Usuario[]>;


  constructor(private usuarioService: UsuarioService,
    private router: Router) {}
  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.usuarios = this.usuarioService.getUsuarioList();
  }

  deleteUsuario(id: number) {
    this.usuarioService.deleteUsuario(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  usuarioDetalle(id: number){
    this.router.navigate(['detalle', id]);
  }
}