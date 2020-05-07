import { Component } from '@angular/core';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  constructor(public locationStrategy: LocationStrategy) {
  }
}
