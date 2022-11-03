import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IProduct } from '../../services/product.service'
import { ProductFacade } from '../../state/product/product.facade'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<IProduct[]>

  constructor(private _productFacade: ProductFacade) {}

  ngOnInit(): void {
    // TODO: Get items in cart from state
    this.cart$ = of([])
  }
}
