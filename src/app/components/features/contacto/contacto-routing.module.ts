import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MensajeComponent} from './mensaje/mensaje.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
      path: '',
      component: MensajeComponent  
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
