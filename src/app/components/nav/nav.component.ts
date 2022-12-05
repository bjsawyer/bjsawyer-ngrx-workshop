import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductUiFacade } from '../../state/ui/product-ui/product-ui.facade'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  numSelectedProducts$: Observable<number>

  constructor(private _facade: ProductUiFacade) {}

  ngOnInit(): void {
    // TODO: Get selected products count from state
    this.numSelectedProducts$ = this._facade.numProductsInCart$
  }
}
