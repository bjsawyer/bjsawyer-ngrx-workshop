import { Action } from '@ngrx/store'

export enum ProductEntityActionType {
  EXAMPLE = '[Product Entity] Example Action',
  EXAMPLE_SUCCESS = '[Product Entity] Example Success Action',
}

export class ExampleEntityAction implements Action {
  readonly type = ProductEntityActionType.EXAMPLE
  constructor(public payload: boolean) {}
}

export class ExampleEntitySuccessAction implements Action {
  readonly type = ProductEntityActionType.EXAMPLE_SUCCESS
}

export type ProductEntityActions = ExampleEntityAction | ExampleEntitySuccessAction
