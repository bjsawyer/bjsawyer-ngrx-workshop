import { Action } from '@ngrx/store'
import { IProductEntity } from './product-entity.interface'

export enum ProductEntityActionType {
  GET_PRODUCTS = '[Product Entity] Get Products',
  GET_PRODUCTS_SUCCESS = '[Product Entity] Get Products Success',
}

export class GetProductsEntityAction implements Action {
  readonly type = ProductEntityActionType.GET_PRODUCTS
}

export class GetProductsEntitySuccessAction implements Action {
  readonly type = ProductEntityActionType.GET_PRODUCTS_SUCCESS
  public constructor(public payload: IProductEntity[]) {}
}

export type ProductEntityActions = GetProductsEntityAction | GetProductsEntitySuccessAction
