import { Action } from '@ngrx/store'

export enum ProductUiActionType {
  EXAMPLE = '[Product UI] Example Action',
  EXAMPLE_SUCCESS = '[Product UI] Example Success Action',
}

export class ExampleAction implements Action {
  readonly type = ProductUiActionType.EXAMPLE
  constructor(public payload: boolean) {}
}

export class ExampleSuccessAction implements Action {
  readonly type = ProductUiActionType.EXAMPLE_SUCCESS
}

export type ProductUiActions = ExampleAction | ExampleSuccessAction
