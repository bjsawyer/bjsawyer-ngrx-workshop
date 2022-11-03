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
  products$: Observable<IProduct[]>

  constructor(private _productFacade: ProductFacade) {}

  ngOnInit(): void {
    // TODO: Get products from a state selector instead of directly from the API request
    this.products$ = this._productFacade.getAllProducts()
  }
}
