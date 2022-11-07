import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import { ExampleUiAction, ExampleUiSuccessAction, ProductUiActionType } from './product-ui.actions'

@Injectable()
export class ProductUiEffects {
  constructor(private _actions$: Actions) {}

  public readonly exampleEffect$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType<ExampleUiAction>(ProductUiActionType.EXAMPLE),
        map((action) => new ExampleUiSuccessAction())
      )
  )
}
