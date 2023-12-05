import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private router: Router) {}


  products = [
    {
      id : 1,
      img1: '../../../assets/women-001.webp',
      img2: '../../../assets/women-001-001.webp',
      img3: '../../../assets/women-001-002.webp',
      img4: '../../../assets/women-001-003.webp',
      ProductDescription: "Ribbed ankles and bottom Acrylic blended tricot fabric ",
      Chest: '78 cm',
      Waist: '59 cm',
      Hip: '89 cm',
      Length: '177 cm',
      alt: "",
      brand: 'Gucci',
      caption: "V Neck Regular Long Sleeve Women's Tricot Sweater",
      price: "27$"
    },

    {
      id : 2,
      img1: '../../../assets/men-001.webp',
      img2: '../../../assets/men-001-001.webp',
      img3: '../../../assets/men-001-002.webp',
      img4: '../../../assets/men-001-003.webp',
      ProductDescription: "100% cotton fabric Button collar",
      Chest: '100 cm',
      Waist: '85 cm',
      Hip: '99 cm',
      Length: '188 cm ',
      alt: "",
      brand: 'Dolce & Gabbana',
      caption: "Basic Crew Neck Long Sleeve Men's Sweatshirt ",
      price: "21$"
    },

    {
      id : 3,
      img1: '../../../assets/women-002.webp',
      img2: '../../../assets/women-002-001.webp',
      img3: '../../../assets/women-002-002.webp',
      img4: '../../../assets/women-002-003.webp',
      ProductDescription: "Front button closure Double breast pocket",
      Chest: '80 cm',
      Waist: '60 cm',
      Hip: '88 cm',
      Length: '176 cm',
      alt: "",
      brand: 'Lc Waikiki',
      caption: "Casual Front Button Closure Straight Pocket Detailed Long Sleeve Corduroy Women's Shirt Jacket",
      price: "30$"
    },

    {
      id : 4,
      img1: '../../../assets/men-002.webp',
      img2: '../../../assets/men-002-001.webp',
      img3: '../../../assets/men-002-002.webp',
      img4: '../../../assets/men-002-003.webp',
      ProductDescription: "Acrylic blend fabric",
      Chest: '93 cm',
      Waist: '74 cm',
      Hip: '91 cm',
      Length: '187 cm ',
      alt: "",
      brand: 'Zara',
      caption: "Casual Oversize Long Sleeve Plaid Men's Lumberjack Shirt Jacket",
      price: "23.85$"
    },

    {
      id : 5,
      img1: '../../../assets/women-003.webp',
      img2: '../../../assets/women-003-001.webp',
      img3: '../../../assets/women-003-002.webp',
      img4: '../../../assets/women-003-003.webp',
      ProductDescription: "Two-side pocket Front snap closure Taffeta lining",
      Chest: '83 cm',
      Waist: '60 cm',
      Hip: '89 cm',
      Length: '173 cm',
      alt: "",
      brand: 'Lc Waikiki',
      caption: "Classic Hooded Quilted Patterned Long Sleeve Thick Women's Faux Leather Jacket",
      price: "38$"
    }
  ]

  onClick(id : any) {
    this.router.navigate(['product', id])
  }
}
