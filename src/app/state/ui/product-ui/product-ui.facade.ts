import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { ProductService } from '../../entity/product-entity/product-entity.service'
import { IProduct } from './product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductUiFacade {
  constructor(private _productService: ProductService) {}

  /**
   * @deprecated Switch this to use state and dispatch an action to the store.
   */
  getAllProducts(): Observable<IProduct[]> {
    // TODO: Move below mapping logic to a UI selector
    return this._productService.getAllProducts$().pipe(
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
