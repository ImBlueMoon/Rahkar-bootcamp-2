import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProducService } from '../../Products.Service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products:any [] = []

  constructor(private router: Router, private productService:ProducService) {
    this.products=this.productService.productsList
  }


  onClick(id : any) {
    this.router.navigate(['product', id])
  }
}
