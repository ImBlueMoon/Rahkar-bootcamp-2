import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-showing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-showing.component.html',
  styleUrl: './todo-list-showing.component.scss'
})
export class TodoListShowingComponent {

  taskIsDone : boolean [] = [];
  // menuList : any [] = [];

  @Input() todoListInput !: any [] ;
  @Output() updateToDoTask = new EventEmitter();

  TaskIsDone(index : number):void {
    this.taskIsDone[index] = !this.taskIsDone[index];
  }

  deletThisTask(index : number):void {
    this.todoListInput.splice(index, 1)
    this.updateToDoTask.emit(this.todoListInput)
  }
}
