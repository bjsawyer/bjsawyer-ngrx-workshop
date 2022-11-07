import { Component, OnInit } from '@angular/core'
import { IProduct } from '../../state/ui/product-ui/product.interface'
import { Observable, of } from 'rxjs'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<IProduct[]>

  constructor(private _facade: ProductUiFacade) {}

  ngOnInit(): void {
    // TODO: Get items in cart from state
    this.cart$ = of([])
  }
}
