import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Shared!!');
  }

  onNotify() {
    window.alert('notify');
  }
}
