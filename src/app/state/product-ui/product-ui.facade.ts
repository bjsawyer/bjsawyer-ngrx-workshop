import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IProduct, ProductService } from '../../services/product.service'

@Injectable({
  providedIn: 'root',
})
export class ProductUiFacade {
  constructor(private _productService: ProductService) {}

  /**
   * @deprecated Switch this to use state and dispatch an action to the store.
   */
  getAllProducts(): Observable<IProduct[]> {
    return this._productService.getAllProducts$()
  }
}
