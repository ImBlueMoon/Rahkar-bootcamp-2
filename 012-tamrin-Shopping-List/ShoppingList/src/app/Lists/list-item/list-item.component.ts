import { Component , Input , Output , EventEmitter } from '@angular/core';
import { IList } from '../typing/list.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  @Input() list! : IList
  @Output() done = new EventEmitter
  @Output() edited = new EventEmitter
  @Output() deleted = new EventEmitter

}
