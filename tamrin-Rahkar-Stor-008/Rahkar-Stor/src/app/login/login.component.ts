import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule , FormControl , FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!: FormGroup

  constructor(private fb:FormBuilder , private AuthService: AuthService, private router: Router) {
    this.form = fb.group ({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })

    // this.AuthService.login$.subscribe((data) => {
    //   // console.log(data)
    // })
  }

  onClick() {
    let a = this.AuthService.login(this.form.value.username, this.form.value.password);
    // console.log(a);
    this.AuthService.login$.subscribe((data: any) => {
      if (data== true) {
        this.router.navigateByUrl('');
      }

    })

  }


}
