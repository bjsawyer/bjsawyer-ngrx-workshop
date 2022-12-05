import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { GetProductsEntityAction } from 'app/state/entity/product-entity/product-entity.actions'
import { selectIsProductEntitiesLoading } from 'app/state/entity/product-entity/product-entity.selectors'
import { Observable } from 'rxjs'
import { IAppState } from '../../../state/app.state'
import { AddToCartUiAction, RemoveFromCartUiAction, SetSelectedProductIdUiAction } from './product-ui.actions'
import {
  selectCartProducts,
  selectIsProductAlreadyInCart,
  selectNumProductsInCart,
  selectProducts,
  selectSelectedProduct,
} from './product-ui.selectors'
import { IProduct } from './product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductUiFacade {
  // TODO: Update below properties with selectors
  allProducts$: Observable<IProduct[]> = this._store.select(selectProducts)
  cart$: Observable<IProduct[]> = this._store.select(selectCartProducts)
  selectedProduct$: Observable<IProduct> = this._store.select(selectSelectedProduct)
  numProductsInCart$: Observable<number> = this._store.select(selectNumProductsInCart)
  shouldShowLoader$: Observable<boolean> = this._store.select(selectIsProductEntitiesLoading)

  constructor(private _store: Store<IAppState>) {}

  getProducts(): void {
    /**
     * TODO: Refactor as such:
     * 1. Move API request logic to entity state
     * 2. Move entity-to-UI mapping to UI state
     * 3. Update this to be a void method that simply dispatches an action
     * 4. Remove `ProductEntityService` from facade
     */
    return this._store.dispatch(new GetProductsEntityAction())
  }

  setSelectedProduct(id: number): void {
    this._store.dispatch(new SetSelectedProductIdUiAction(id))
  }

  addProductToCart(id: number): void {
    // TODO: Dispatch action
    this._store.dispatch(new AddToCartUiAction(id))
  }

  removeProductFromCart(id: number): void {
    // TODO: Dispatch action
    this._store.dispatch(new RemoveFromCartUiAction(id))
  }

  isProductInCart$(id: number): Observable<boolean> {
    // TODO: Get from selector
    return this._store.select(selectIsProductAlreadyInCart(id))
  }
}
