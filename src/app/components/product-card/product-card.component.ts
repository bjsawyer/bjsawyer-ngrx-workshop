import { Component, Input } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IProductEntity } from '../../state/entity/product-entity/product-entity.interface'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: IProductEntity
  @Input() view?: 'products' | 'cart' = 'products'

  constructor(private _facade: ProductUiFacade) {}

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
