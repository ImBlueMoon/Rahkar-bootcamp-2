import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-001',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-001.component.html',
  styleUrl: './box-001.component.scss'
})
export class Box001Component {

  ngOnDestroy() {
    console.log("باکس 001 ترکیییید :)");
  }
}
