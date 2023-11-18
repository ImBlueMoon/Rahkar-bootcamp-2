import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormGroup, FormGroupDirective }   from '@angular/forms';

@Component({
  selector: 'app-todo-textcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-textcomponent.component.html',
  styleUrl: './todo-textcomponent.component.scss'
})
export class TodoTextcomponentComponent {


  inputValue : string = ''

  @Output() ToDoValueOutPut = new EventEmitter() ;

  onChangeText(event : any) {
    this.inputValue = event.target.value ;
  }
  onHandleClick(event : any) {
    this.ToDoValueOutPut.emit(this.inputValue)
  }

}
