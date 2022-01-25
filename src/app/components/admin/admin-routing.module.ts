import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent} from './admin.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {MensajesComponent} from './mensajes/mensajes.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'empleados',
        component: EmpleadosComponent
      },
      {
        path: 'mensajes',
        component: MensajesComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  title = 'Admin'
}
