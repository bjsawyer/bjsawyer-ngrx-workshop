import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import {
  ExampleAction,
  ExampleSuccessAction,
  ProductActionType,
} from './product.actions'

@Injectable()
export class ProductEffects {
  constructor(private _actions$: Actions) {}

  public readonly exampleEffect$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType<ExampleAction>(ProductActionType.EXAMPLE),
        map((action) => new ExampleSuccessAction())
      )
  )
}
