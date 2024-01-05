import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule , FormBuilder , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AddMoneyToWallet } from './AddMonney.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-add-to-my-wallet',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './add-to-my-wallet.component.html',
  styleUrl: './add-to-my-wallet.component.scss'
})
export class AddToMyWalletComponent {
  constructor(private fb: FormBuilder , private AddMoneyToWallet: AddMoneyToWallet) {}
  router = inject(Router)


  form : FormGroup = this.fb.group({
    bujet:['' , Validators.required]
  })

  token !: string
  decode !: any
  onHandleAddToWallet() {

    this.token = this.AddMoneyToWallet.getTokenFromLocalStorage()
    // console.log(this.token);
     this.decode = jwtDecode(this.token);
    // console.log(this.decode?.id);

    this.AddMoneyToWallet.AddMoney(this.decode.id, this.form.value.bujet).subscribe({
      next: (data) => {

      },
      error: (error) => {

      },
      complete: () =>{

      }
    })


  }

}
