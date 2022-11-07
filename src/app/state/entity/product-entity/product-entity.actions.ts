import { Action } from '@ngrx/store'

export enum ProductEntityActionType {
  EXAMPLE = '[Product Entity] Example Action',
  EXAMPLE_SUCCESS = '[Product Entity] Example Success Action',
}

export class ExampleAction implements Action {
  readonly type = ProductEntityActionType.EXAMPLE
  constructor(public payload: boolean) {}
}

export class ExampleSuccessAction implements Action {
  readonly type = ProductEntityActionType.EXAMPLE_SUCCESS
}

export type ProductEntityActions = ExampleAction | ExampleSuccessAction
