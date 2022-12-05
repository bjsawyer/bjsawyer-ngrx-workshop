import { Injectable } from '@angular/core'
import { Actions } from '@ngrx/effects'

@Injectable()
export class ProductUiEffects {
  constructor(private _actions$: Actions) {}
}
