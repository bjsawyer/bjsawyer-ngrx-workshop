import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { IProduct } from '../../services/product.service'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products$: Observable<IProduct[]>

  constructor(private _facade: ProductUiFacade) {}

  ngOnInit(): void {
    // TODO: Get products from a state selector instead of directly from the API request
    this.products$ = this._facade.getAllProducts()
  }
}
