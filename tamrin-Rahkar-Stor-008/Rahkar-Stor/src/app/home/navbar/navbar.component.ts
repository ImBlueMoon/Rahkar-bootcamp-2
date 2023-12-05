import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  userIsLogin: boolean = false

  constructor(private AuthService: AuthService) {
    this.checkIsLogin ()
  }

  checkIsLogin(){
    this.AuthService.login$.subscribe({
      next:(data: any)=>{
        this.userIsLogin = data
      }
    })
  }

}
