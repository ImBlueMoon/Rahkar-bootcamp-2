import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormBuilder, FormControl ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!: FormGroup

  constructor(private fb:FormBuilder , private router: Router , private AuthService: AuthService) {
    this.form = fb.group ({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })
  }

  onClick() {
    let a = this.AuthService.login(this.form.value.username, this.form.value.password);
    // console.log(a);
    this.AuthService.login$.subscribe((data: any) => {
      if (data == true) {
        this.router.navigateByUrl('');
      }
    })
  }

}
