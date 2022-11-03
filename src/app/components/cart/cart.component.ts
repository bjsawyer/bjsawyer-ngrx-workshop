import { Component, OnInit } from '@angular/core'
import { IProduct } from 'app/services/product.service'
import { ProductFacade } from 'app/state/product/product.facade'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // TODO: Get items in cart from state
  cart$: Observable<IProduct[]>

  constructor(private _productFacade: ProductFacade) {}

  ngOnInit(): void {}
}
