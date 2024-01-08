import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServices } from '../services/users.service';

@Component({
  selector: 'app-trans-actions',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './trans-actions.component.html',
  styleUrl: './trans-actions.component.scss'
})
export class TransActionsComponent {

  constructor(private fb: FormBuilder , private userService: UserServices) {}

  form : FormGroup = this.fb.group({
    title: ['', Validators.required],
    amount: ['', Validators.required]
  })

  onHandleBuyProducts() {
    var token = this.userService.getTokenFromLocalStorage()
    // console.log(this.form.value.amount);
    // console.log(token);

    this.userService.buyProduct(token , this.form.value.title , this.form.value.amount ).subscribe({
      next: (data) => {
        // console.log(data);
        console.log(JSON.stringify(data.message));
      },
      error: (error) => {
        // console.log(error);
        console.log(JSON.stringify(error.error.message));
      },
      complete: () =>{

      }
    })
    this.form.setValue({title : "" , amount: ""})
  }

}
