import { Component } from '@angular/core';
import { Product, PRODUCTS } from './products';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: Product[] = PRODUCTS;
}
