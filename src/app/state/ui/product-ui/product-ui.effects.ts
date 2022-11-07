import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import {
  ExampleAction,
  ExampleSuccessAction,
  ProductUiActionType,
} from './product-ui.actions'

@Injectable()
export class ProductUiEffects {
  constructor(private _actions$: Actions) {}

  public readonly exampleEffect$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType<ExampleAction>(ProductUiActionType.EXAMPLE),
        map((action) => new ExampleSuccessAction())
      )
  )
}
