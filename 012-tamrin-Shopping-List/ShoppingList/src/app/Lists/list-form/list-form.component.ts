import { Component, inject } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { IList } from '../typing/list.models';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule , FormBuilder , FormGroup , Validators} from '@angular/forms';
import { ListService } from '../list.service';
import { ListSubmitType } from '../enums/list-submit-type';

@Component({
  selector: 'app-list-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule , ListItemComponent],
  templateUrl: './list-form.component.html',
  styleUrl: './list-form.component.scss'
})
export class ListFormComponent {

  // fb = inject(FormBuilder)

  constructor(private listService : ListService , private fb : FormBuilder) {
    this.getAllList()
  }


  formList : FormGroup = this.fb.group({
    title:['', Validators.required]
  })


  shoppingList: IList [] = []

  submitType = ListSubmitType.submit

  selectedListId !: number


  getAllList() {
    this.listService.getListItems().subscribe({
      next:(data) => {
        this.shoppingList = data.result
      },
      error:(error) => {

      },
      complete:() => {

      }
    })
  }


  onClick() {

    // console.log(this.formList.get("title")?.value);
    console.log(this.formList.value.title);

    if (this.submitType==ListSubmitType.submit) {
      this.listService.addList(this.formList.value).subscribe({
        next:(data) => {
          console.log(data);
          this.getAllList()
        },
        error:(error) => {

        },
        complete:() => {

        }
      })
    }
    if (this.submitType==ListSubmitType.update) {
      this.listService.editeListTitle(this.formList.value,this.selectedListId).subscribe({
        next:(data) => {
          console.log(data);
          this.getAllList()
        },
        error:(error) => {

        },
        complete:() => {
          this.submitType = ListSubmitType.submit
        }
      })
    }

    // this.formList.reset()
    this.formList.setValue({title:""})
  }



  onDoneList(listId : number) {
    // console.log(listId);
    this.listService.changeListStatus(listId).subscribe({
      next:(data) => {
        console.log(data);
        this.getAllList()
      },
      error:(error) => {

      },
      complete:() => {

      }
    })

  }



  onEditList(listId : number) {
    // console.log(listId);
    this.listService.getOneItem(listId).subscribe({
      next:(data) => {
        this.formList.get("title")?.setValue(data.result[0].title)
        this.submitType = ListSubmitType.update
        this.selectedListId = listId
      },
      error:(error) => {

      },
      complete:() => {
      }
    })

  }



  onDeleteList(listId : number) {
    // console.log(listId);
    this.listService.deleteList(listId).subscribe({
      next:(data) => {
        console.log(data);
        this.getAllList()
      },
      error:(error) => {

      },
      complete:() => {

      }
    })

  }

}
