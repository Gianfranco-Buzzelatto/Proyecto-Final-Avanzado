import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminComponent } from './admin.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [CategoriasComponent, EmpleadosComponent, MensajesComponent, ProductosComponent, UsuariosComponent, AdminComponent, InicioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [CategoriasComponent, EmpleadosComponent, MensajesComponent, ProductosComponent, UsuariosComponent]
})
export class AdminModule {
  title ='Administrador'
 }
