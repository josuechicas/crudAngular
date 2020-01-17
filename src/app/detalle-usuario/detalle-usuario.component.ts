import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ListaUsuarioComponent } from '../lista-usuario/lista-usuario.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

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
    list(){
      this.router.navigate(['/usuarios']);

}
}
