import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../sheared/modules/material/material.module';
import { FormControl, Validators } from '@angular/forms';
import { SharedModule } from '../../sheared/shared.module';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [SharedModule]
})
export class LoginComponent implements OnInit {
  hide= true
  constructor() { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  rememberMe = new FormControl(false);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
