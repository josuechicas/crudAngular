import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;

  
  constructor(private route: ActivatedRoute,private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();

    this.id = this.route.snapshot.params['id'];
    
    this.usuarioService.getUsuario(this.id)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.usuarioService.updateUsuario(this.id, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/usuarios']);
  }
}
