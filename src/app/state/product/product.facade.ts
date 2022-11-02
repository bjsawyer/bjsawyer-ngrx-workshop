import { Injectable } from '@angular/core'
import { IProduct, ProductService } from 'app/services/product.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  constructor(private _productService: ProductService) {}

  /**
   * @deprecated Switch this to use state and dispatch an action to the store.
   */
  getAllProducts(): Observable<IProduct[]> {
    return this._productService.getAllProducts$()
  }
}
