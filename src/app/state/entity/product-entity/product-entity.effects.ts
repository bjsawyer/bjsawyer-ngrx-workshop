import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { map, Observable, switchMap } from 'rxjs'
import {
  GetProductsEntityAction,
  GetProductsEntitySuccessAction,
  ProductEntityActionType,
} from './product-entity.actions'
import { ProductEntityService } from './product-entity.service'

@Injectable()
export class ProductEntityEffects {
  constructor(private _actions$: Actions, private _service: ProductEntityService) {}

  public readonly getProductsEntityEffect$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType<GetProductsEntityAction>(ProductEntityActionType.GET_PRODUCTS),
        switchMap(() => this._service.getAllProducts$().pipe(map((res) => new GetProductsEntitySuccessAction(res))))
      )
  )
}
