import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formObject: any = {
    usuario : new FormControl(),
    password: new FormControl()
  }
  
  form: FormGroup = new FormGroup(this.formObject);
  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject)
  }

}
