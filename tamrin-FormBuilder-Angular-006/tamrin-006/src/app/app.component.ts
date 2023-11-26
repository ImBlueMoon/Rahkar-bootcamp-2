import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule , ReactiveFormsModule , FormControl , FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tamrin-006';


  form!: FormGroup

  constructor(private fb:FormBuilder) {
    this.form = fb.group ({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      mobile : new FormControl(''),
      email : new FormControl('')
    })
  }

  Data : any[] = []

  onClick() {
    // console.log(this.form.value);
    this.Data.push({
      fname : this.form.value.firstname ,
      lname : this.form.value.lastname ,
      mobile : this.form.value.mobile ,
      email : this.form.value.email
    })
  }

  deletData(index : number) {
    this.Data.splice(index,1)
  }

  // name = new FormControl('');
  // fname = new FormControl('');
  // lname = new FormControl('');
  // mobile = new FormControl('');
  // email = new FormControl('');
}
