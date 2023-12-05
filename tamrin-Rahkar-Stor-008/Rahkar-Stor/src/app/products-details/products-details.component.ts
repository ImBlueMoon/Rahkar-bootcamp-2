import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProducService } from '../Products.Service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent {

  productId!: any
  products: any[] = []
  constructor( private activatedRoute:ActivatedRoute , private productService:ProducService) {

    this.products=this.productService.productsList

    this.productId=this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Product Id is : ',this.productId);

    this.productId=this.products.filter(p => p.id == this.productId)
  }
}
