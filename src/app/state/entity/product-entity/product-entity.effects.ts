import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import {
  ExampleAction,
  ExampleSuccessAction,
  ProductEntityActionType,
} from './product-entity.actions'

@Injectable()
export class ProductEntityEffects {
  constructor(private _actions$: Actions) {}

  public readonly exampleEffect$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType<ExampleAction>(ProductEntityActionType.EXAMPLE),
        map((action) => new ExampleSuccessAction())
      )
  )
}
