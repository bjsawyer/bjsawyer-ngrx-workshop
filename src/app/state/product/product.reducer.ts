import { ProductActions, ProductActionType } from './product.actions'
import { IProductState, PRODUCT_INITIAL_STATE } from './product.state'

export function productReducer(
  state: IProductState = PRODUCT_INITIAL_STATE,
  action: ProductActions
): IProductState {
  switch (action.type) {
    case ProductActionType.EXAMPLE:
      return {
        ...state,
      }
    case ProductActionType.EXAMPLE_SUCCESS:
      return {
        ...state,
      }
    default:
      return state
  }
}
