import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  numSelectedProducts$: Observable<number>

  constructor() {}

  ngOnInit(): void {
    // TODO: Get selected products count from state
    this.numSelectedProducts$ = of(0)
  }
}
