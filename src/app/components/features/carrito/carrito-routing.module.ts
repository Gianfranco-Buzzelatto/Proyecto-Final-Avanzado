import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarritoComponent} from './carrito/carrito.component'
import {FinalizarComponent} from './finalizar/finalizar.component'

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '',
        component: CarritoComponent
      },
      {
        path: 'finalizar',
        component: FinalizarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
