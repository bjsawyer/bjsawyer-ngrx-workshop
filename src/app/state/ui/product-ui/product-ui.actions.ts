import { Action } from '@ngrx/store'

export enum ProductUiActionType {
  EXAMPLE = '[Product UI] Example Action',
  EXAMPLE_SUCCESS = '[Product UI] Example Success Action',
}

export class ExampleUiAction implements Action {
  readonly type = ProductUiActionType.EXAMPLE
  constructor(public payload: boolean) {}
}

export class ExampleUiSuccessAction implements Action {
  readonly type = ProductUiActionType.EXAMPLE_SUCCESS
}

export type ProductUiActions = ExampleUiAction | ExampleUiSuccessAction
