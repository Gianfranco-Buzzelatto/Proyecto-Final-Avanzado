import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  LoginComponent  } from './login/login.component';
import {  LogoutComponent  } from './logout/logout.component';
import {  RegistroComponent  } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
