import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule , ReactiveFormsModule , FormControl , FormGroup, FormBuilder } from '@angular/forms';
// import {MatTableModule} from '@angular/material/table';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, SearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'tamrin-006';


  form!: FormGroup
  searchText = '';

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
    this.form.setValue ({
      firstname : '',
      lastname : '',
      mobile : '',
      email : ''
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
