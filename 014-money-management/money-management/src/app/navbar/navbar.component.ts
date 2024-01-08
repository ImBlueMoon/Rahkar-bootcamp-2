import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { UserServices } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router , private userService: UserServices){}

  onHandleLogOut() {
    this.userService.logout()
    console.log("logOut anjam shod");

  }
}
