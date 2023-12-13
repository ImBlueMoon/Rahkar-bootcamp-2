import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TelegramService } from './telegram.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Telegram';

  chatId : number[] = [563770451]

  constructor(private telegramService: TelegramService , private formBuilder: FormBuilder) {}

  form : FormGroup = this.formBuilder.group({
    text : ["", Validators.required],
    photo: ["", Validators.required],
    caption:["", Validators.required]
  })

  submit() {
    if(this.form.valid)
    this.telegramService.sendMessage(this.chatId[0] , this.form.value.text).subscribe(data =>{}),
    this.telegramService.sendPhoto(this.chatId[0] , this.form.value.photo , this.form.value.caption).subscribe(dataPhoto => {})
  }

}
