import { Component } from '@angular/core'
import { IProduct } from 'app/services/product.service'
import { ProductFacade } from 'app/state/product/product.facade'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // TODO: Get products from a state selector instead of directly from the API request
  products$: Observable<IProduct[]> = this._productFacade.getAllProducts()

  constructor(private _productFacade: ProductFacade) {}
}
