import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IProduct } from '../../services/product.service'
import { ProductFacade } from '../../state/product/product.facade'

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
