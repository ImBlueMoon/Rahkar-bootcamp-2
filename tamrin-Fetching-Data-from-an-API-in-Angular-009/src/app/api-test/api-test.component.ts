import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProsuctService } from '../product.service';
import { HttpClientModule , HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-test',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './api-test.component.html',
  styleUrl: './api-test.component.scss'
})
export class ApiTestComponent {

  result : any[] = []

  constructor(private productService : ProsuctService) {
    console.log(1,'salam');

  }

  ngOnInit() {

    this.productService.getProduct().subscribe({
      next : (data : any) => {
        this.result = data
      }
    })
  }
}
