import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule , FormControl , FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!: FormGroup

  constructor(private fb:FormBuilder , private AuthService: AuthService) {
    this.form = fb.group ({
      username : new FormControl(''),
      password : new FormControl(''),
    })
  }

  onClick() {
    let a = this.AuthService.login(this.form.value.username, this.form.value.password);
    console.log(a)
    // console.log(this.form.value.username);

  }
}
