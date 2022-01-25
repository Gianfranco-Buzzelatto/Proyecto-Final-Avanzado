import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegistroComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [ LoginComponent, LogoutComponent, RegistroComponent]
})
export class AccountModule {} 