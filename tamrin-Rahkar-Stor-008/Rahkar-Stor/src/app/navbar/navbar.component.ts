import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  userIsLogin =true

  constructor(private router: Router,  private AuthService: AuthService) {
    this.AuthService.login$.subscribe((data: any) => {
      console.log(data)
      this.userIsLogin=data;
    })
  }

  // navbarItems: any[] = [
  //   {
  //     islogin: !this.userIsLogin,
  //     title: 'Login',
  //     link: 'login'
  //   },
  //   {
  //     islogin:this.userIsLogin,
  //     title: 'Profile',
  //     link: 'profile'
  //   }
  // ];

  // onClick() {

  //   this.router.navigateByUrl(link);

  // }

}
