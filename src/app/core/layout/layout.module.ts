import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BtnComponent } from './btn/btn.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, BtnComponent]
})
export class LayoutModule { }
