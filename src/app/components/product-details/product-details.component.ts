import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
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
    this.selectedProduct$ = of({
      id: 0,
      title: 'Fake Product',
      price: '$0.00',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    } as IProduct)
  }
}
