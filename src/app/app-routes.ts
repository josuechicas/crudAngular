import { Routes, RouterModule } from '@angular/router';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component'
import { HomeComponent } from './home/home.component';
import { CrearUsuarioComponent } from '../app/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from '../app/actualizar-usuario/actualizar-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
const app_routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: ListaUsuarioComponent },
  { path: 'agregarusuario', component: CrearUsuarioComponent },
  { path: 'actualizar/:id', component: ActualizarUsuarioComponent },
  { path: 'detalle/:id', component: DetalleUsuarioComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' }

];


export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
