import { Component, OnInit } from '@angular/core'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _facade: ProductUiFacade) {}

  ngOnInit() {}
}
