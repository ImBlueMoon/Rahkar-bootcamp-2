import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-003',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-003.component.html',
  styleUrl: './box-003.component.scss'
})
export class Box003Component {

  firstname : string = ''
  lasstname : string = ''

  @Output() FirstNameOutPut = new EventEmitter();
  @Output() LastNameOutPut = new EventEmitter();

  onChangeFirstName(event : any) {
    this.firstname = event.target.value
    // console.log(this.firstname);
  }

  onChangeLaststName(event : any) {
    this.lasstname = event.target.value
    // console.log(this.lasstname);
  }

  onHandleClick(event: any) {
    // console.log(this.firstname);

    this.FirstNameOutPut.emit(this.firstname);
    this.LastNameOutPut.emit(this.lasstname);
  }

}
