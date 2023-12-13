import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TelegramService {

  constructor(private http:HttpClient) {}

  botToken = '6861916145:AAFo2i91fEJME0BIkxl7ec0kxCXJG8qVVJU'
  telegramAPIsendMessage = `https://api.telegram.org/bot${this.botToken}/sendMessage`
  telegramAPIsendPhoto = `https://api.telegram.org/bot${this.botToken}/sendPhoto`

  sendMessage(chatId : number , message : string) {
    var data = {
      chat_id : chatId ,
      text : message ,
    }
    return this.http.post(this.telegramAPIsendMessage , data)
  }

  sendPhoto(chat_id : number , photo : string  , caption : string) {
    var dataPhoto = {
      chat_id : chat_id ,
      photo : photo ,
      caption : caption
    }
    return this.http.post(this.telegramAPIsendPhoto , dataPhoto)
  }

}

