import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

export interface IProduct{
  id: number,
  name: string,
}

@Component({
  selector: 'edu-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  activateRoute = inject(ActivatedRoute);
  _productService = inject(ProductsService);

  product: null | IProduct = null;

  ngOnInit(): void {

    const { id } = this.activateRoute.snapshot.params;
    this._productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }
}
