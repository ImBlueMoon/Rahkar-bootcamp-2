import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-002',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-002.component.html',
  styleUrl: './box-002.component.scss'
})
export class Box002Component {

  @Input() LastNameInput !: string ;

}
