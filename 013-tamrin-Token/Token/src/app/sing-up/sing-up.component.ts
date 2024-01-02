import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule , FormBuilder , FormGroup , Validators} from '@angular/forms';
import { UserServices } from './service';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {

  constructor(private fb: FormBuilder , private Service: UserServices) {}

  form : FormGroup = this.fb.group({
    name:['' , Validators.required],
    password:['' , Validators.required]
  })



  onSignUp() {
    this.Service.signUp(this.form.value.name , this.form.value.password).subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (error) => {

      },
      complete: () =>{

      }
    })
  }

  onLogin() {
    this.Service.login(this.form.value.name , this.form.value.password).subscribe({
      next: (data) => {
        // console.log(data);
        this.Service.setTokenToLocalStorage(data)

      },
      error: (error) => {

      },
      complete: () =>{

      }
    })
  }

}
