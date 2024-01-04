import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserServices } from '../SignUp-Login/service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userService = inject(UserServices);
  router = inject(Router);

  logout() {
    this.userService.logout();
  }

  login() {
    this.router.navigateByUrl("login");
  }

}
