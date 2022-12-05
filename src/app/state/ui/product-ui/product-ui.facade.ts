import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable, of } from 'rxjs'
import { IAppState } from '../../../state/app.state'
import { ProductEntityService } from '../../entity/product-entity/product-entity.service'
import { IProduct } from './product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductUiFacade {
  // TODO: Update below properties with selectors
  products$: Observable<IProduct[]>
  cart$: Observable<IProduct[]>
  selectedProduct$: Observable<IProduct>
  numSelectedProducts$: Observable<number>
  shouldShowLoader$: Observable<boolean>

  constructor(private _store: Store<IAppState>, private _productEntityService: ProductEntityService) {}

  getProducts(): Observable<IProduct[]> {
    /**
     * TODO: Refactor as such:
     * 1. Move API request logic to entity state
     * 2. Move entity-to-UI mapping to UI state
     * 3. Update this to be a void method that simply dispatches an action
     * 4. Remove `ProductEntityService` from facade
     */
    return this._productEntityService.getAllProducts$().pipe(
      map((productEntities) =>
        productEntities.map(
          (productEntity): IProduct => ({
            id: productEntity.id,
            title: productEntity.title,
            price: `$${(Math.round(productEntity.price * 100) / 100).toFixed(2)}`,
            image: productEntity.image,
          })
        )
      )
    )
  }

  setSelectedProduct(id: number): void {
    // TODO: Dispatch action
  }

  addProductToCart(id: number): void {
    // TODO: Dispatch action
  }

  removeProductFromCart(id: number): void {
    // TODO: Dispatch action
  }

  isProductInCart$(id: number): Observable<boolean> {
    // TODO: Get from selector
    return of(false)
  }
}
