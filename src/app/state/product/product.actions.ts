import { Action } from '@ngrx/store'

export enum ProductActionType {
  EXAMPLE = '[Product] Example Action',
  EXAMPLE_SUCCESS = '[Product] Example Success Action',
}

export class ExampleAction implements Action {
  readonly type = ProductActionType.EXAMPLE
  constructor(public payload: boolean) {}
}

export class ExampleSuccessAction implements Action {
  readonly type = ProductActionType.EXAMPLE_SUCCESS
}

export type ProductActions = ExampleAction | ExampleSuccessAction
