import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule,MatFormFieldModule, MatInputModule,MatButtonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signInForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required,Validators.email]),
  });
  constructor(private authService: AuthService) { }
  onSubmit() {
    if (this.signInForm.valid) {
      this.authService.signIn();
    }
  }

}
