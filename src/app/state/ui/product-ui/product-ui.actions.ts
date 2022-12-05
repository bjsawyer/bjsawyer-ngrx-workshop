import { Action } from '@ngrx/store'

export enum ProductUiActionType {
  SET_SELECTED_PRODUCT_ID = '[Product UI] Set Selected Product ID',
  ADD_TO_CART = '[Product UI] Add to Cart',
  REMOVE_FROM_CART = '[Product UI] Remove from Cart',
}

export class SetSelectedProductIdUiAction implements Action {
  readonly type = ProductUiActionType.SET_SELECTED_PRODUCT_ID
  constructor(public payload: number) {}
}

export class AddToCartUiAction implements Action {
  readonly type = ProductUiActionType.ADD_TO_CART
  constructor(public payload: number) {}
}

export class RemoveFromCartUiAction implements Action {
  readonly type = ProductUiActionType.REMOVE_FROM_CART
  constructor(public payload: number) {}
}

export type ProductUiActions = SetSelectedProductIdUiAction | AddToCartUiAction | RemoveFromCartUiAction
