import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
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
    this._facade.setSelectedProduct(id)
    this._router.navigate(['product'])
  }

  addToCart(id: number): void {
    // TODO: Hook into state
    this._facade.addProductToCart(id)
  }

  removeFromCart(id: number): void {
    // TODO: Hook into state
    this._facade.removeProductFromCart(id)
  }

  isProductInCart$(id: number): Observable<boolean> {
    // TODO: Use a selector to determine if a product is in the cart
    return this._facade.isProductInCart$(id)
  }
}
