import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Box001Component } from './box-001/box-001.component';
import { Box002Component } from './box-002/box-002.component';
import { Box003Component } from './box-003/box-003.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Box001Component, Box002Component, Box003Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tamrin-Input-Output-Angular';


  isShowing : boolean = true;
  lastnameInputForBox002 : string = ''

  constructor() {
    console.log("Construct :) ");
    setTimeout(() => {
      this.isShowing = false;
    }, 5000);
  }


  ngOnInit(): void {
    console.log("Init :) ");
  }

  onHandleFirststName(event : string) {
    console.log(event);
  }

  onHandleLastName(event : string) {
    this.lastnameInputForBox002 = event
  }

}
