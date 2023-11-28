import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(private router: Router) {}

  users: any[] = [
    {
      id: 1,
      Fname: "Alireza",
      Lname: "Ebrahim Khani",
      City: "Zanjan",
      University:"University of Padua"
    },
    {
      id: 2,
      Fname: "Kamal",
      Lname: "Gharajelou",
      City: "Tehran",
      University:"Sapienza University Rome"
    },
    {
      id: 3,
      Fname: "Mohammad",
      Lname: "Ahmadi",
      City: "Zanjan",
      University:"University of Milan"
    },
    {
      id: 4,
      Fname: "Hossein",
      Lname: "Ahmadi",
      City: "Esfahan",
      University:"University of Turin"
    },
    {
      id: 5,
      Fname: "Mahdi",
      Lname: "Hatami",
      City: "Mazandaran",
      University:"University of Turin"
    }
  ];

  onClick(id: string) {
    this.router.navigate(['home/user', id])
  }

}
