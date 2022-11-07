import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { IAppState } from 'app/state/app.state'
import { map, Observable } from 'rxjs'
import { ProductEntityService } from '../../entity/product-entity/product-entity.service'
import { IProduct } from './product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductUiFacade {
  constructor(private _store: Store<IAppState>, private _productEntityService: ProductEntityService) {}

  getAllProducts(): Observable<IProduct[]> {
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
}
