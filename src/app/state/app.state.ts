import { IProductState, PRODUCT_STATE_NAME } from './product/product.state'

export interface IAppState {
  [PRODUCT_STATE_NAME]: IProductState
}
