import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoTextcomponentComponent } from './todo-input-component/todo-textcomponent.component';
import { TodoListShowingComponent } from './todo-list-showing/todo-list-showing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoTextcomponentComponent, TodoListShowingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tamrin-ToDoApp-005';


  todoList : any [] = []

  onHandleToDoValue(event : any) {
    console.log(event);
    this.todoList.push(event)
  }

  updateTodoValue(event : any) {
    this.todoList = event;
    console.log(this.todoList);
  }

}
