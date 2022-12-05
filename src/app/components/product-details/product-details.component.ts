import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'
import { IProduct } from '../../state/ui/product-ui/product.interface'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct$: Observable<IProduct>

  constructor(private _facade: ProductUiFacade) {}

  ngOnInit() {
    // TODO: Get selected product from state by ID
    this.selectedProduct$ = this._facade.selectedProduct$
  }
}
