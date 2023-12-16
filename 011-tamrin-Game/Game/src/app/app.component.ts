import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder ,FormGroup , ReactiveFormsModule , Validators} from '@angular/forms';
import { SendPlayerNameToServer } from './sendPlayerNameToServer.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Game';

  constructor( private formBuilder: FormBuilder , private SendPlayerNameToServer: SendPlayerNameToServer ) {}

  form : FormGroup  = this.formBuilder.group({
    name1:['', Validators.required],
    name2:['', Validators.required]
  })

  users: any[] = []
  randomNumber !: number
  score1 = 0
  score2 = 0

  submit() {
    if(this.form.value)
    this.SendPlayerNameToServer.sendName(this.form.value.name1 , this.form.value.name2),
    this.SendPlayerNameToServer.getMyServerData().subscribe(data => {
      this.users = data
    })
  }


  getNumber() {

    this.SendPlayerNameToServer.getRandomNumber().subscribe(data => {
      console.log(data);
      this.randomNumber = data
      if(data <= 3)
      this.score1 +=1
      else
      this.score2 +=1
    })
  }

  ngDoCheck() {
    if(this.score1 == 5)
    alert("playe 1 win")
    else if(this.score2 == 5)
    alert("player 2 win")
  }

}
