import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder
  ){
    this.userId=this.activatedRoute.snapshot.paramMap.get('id');
    console.log( this.userId );

    this.users=this.users.filter(p => p.id == this.userId)
  }

  // ngOnInit() {
  //   this.users=this.users.filter(p => p.id == this.userId)
  // }


  userId!:string|null

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

}
