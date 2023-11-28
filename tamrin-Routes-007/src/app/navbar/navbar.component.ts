import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  menuItem: any[] = [
    {
      title: 'Home',
      link: 'home',
    },
    {
      title: 'Users',
      link: 'home/users'
    }
  ];

  onClick(link: string) {
    this.router.navigateByUrl(link);
  }

}
