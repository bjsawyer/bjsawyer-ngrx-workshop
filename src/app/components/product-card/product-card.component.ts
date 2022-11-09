import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'
import { IProduct } from '../../state/ui/product-ui/product.interface'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: IProduct
  @Input() view?: 'products' | 'cart' = 'products'

  constructor(private _facade: ProductUiFacade, private _router: Router) {}

  viewProduct(id: number): void {
    // TODO: Dispatch action to set selected product ID in state
    this._router.navigate(['product'])
  }

  addToCart(id: number): void {
    // TODO: Hook into state
    console.log(`ADD clicked for product ${id}`)
  }

  removeFromCart(id: number): void {
    // TODO: Hook into state
    console.log(`REMOVE clicked for product ${id}`)
  }

  isProductInCart$(id: number): Observable<boolean> {
    // TODO: Use a selector to determine if a product is in the cart
    return of(false)
  }
}
