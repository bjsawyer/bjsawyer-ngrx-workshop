import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'
import { IProduct } from '../../state/ui/product-ui/product.interface'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products$: Observable<IProduct[]>

  constructor(private _facade: ProductUiFacade) {}

  ngOnInit(): void {
    // TODO: Dispatch action to get products and retrieve them from a state selector instead of directly from the API request
    this.products$ = this._facade.getProducts()
  }
}
