import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServices } from '../services/users.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private fb: FormBuilder , private userService: UserServices) {}
  router = inject(Router)

  form : FormGroup = this.fb.group({
    mobile:['' , Validators.required],
    password:['' , Validators.required]
  })

  onLogin() {
    this.userService.login(this.form.value.mobile , this.form.value.password).subscribe({
      next: (data) => {
        // console.log(data);
        console.log("User logged in successfully");

        this.userService.setTokenToLocalStorage(data)
        this.router.navigateByUrl("home")
      },
      error: (error) => {
        console.log(JSON.stringify(error.error.message));
      },
      complete: () =>{

      }
    })
  }

}
