import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabelAnimationComponent } from '../../inputs/input-animation/input-animation.component';
import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-login',
  standalone: true,
  imports: [InputLabelAnimationComponent, CommonModule, FormsModule,
    ReactiveFormsModule],
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.scss'
})

export class CardLoginComponent {
  formLoginData: FormGroup;
  showPassword: boolean = false;
  isFocus: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.formLoginData = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  updateFormControlValue(fieldName: string, value: string) {    
    this.formLoginData.get(fieldName)?.setValue(value);
    this.isFocus = true;
  }

  viewPassword() {
    this.showPassword = !this.showPassword;
  }
  login() {
    if (this.formLoginData && this.formLoginData.valid) {
      this.authService.login(this.formLoginData.value).then((result) => {
        if (!result.includes("Error")) {
          console.log('Success: Credenciales correctas');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: result
          })
        }
      }).catch((err: any) => {
        console.log('Error:', err);
      });
    } else {
      console.log('Error: Formulario no válido');
    }
  }
}
