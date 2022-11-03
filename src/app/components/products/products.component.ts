import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { IProduct } from '../../services/product.service'
import { ProductFacade } from '../../state/product/product.facade'

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
