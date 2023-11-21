import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-showing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-showing.component.html',
  styleUrl: './todo-list-showing.component.scss'
})
export class TodoListShowingComponent {


  menuList : any [] = [];

  @Input() todoListInput !: string ;


  ngOnChanges() {
    if (this.todoListInput)
    this.menuList.push({title : this.todoListInput, done : false})
  }

  TaskIsDone(index : number) {
    this.menuList[index].done = !this.menuList[index].done;
  }

  deletThisTask(index : number) {
    this.menuList.splice(index,1)
    // this.updateToDoTask.emit(this.menuList)
  }
}

