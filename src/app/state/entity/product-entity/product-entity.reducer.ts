import { ProductEntityActions, ProductEntityActionType } from './product-entity.actions'
import { entityAdapter, IProductEntityState, PRODUCT_ENTITY_INITIAL_STATE } from './product-entity.state'

export function productEntityReducer(
  state: IProductEntityState = PRODUCT_ENTITY_INITIAL_STATE,
  action: ProductEntityActions
): IProductEntityState {
  switch (action.type) {
    case ProductEntityActionType.GET_PRODUCTS:
      return entityAdapter.removeAll({
        ...state,
        isLoading: true,
        hasLoaded: false,
      })
    case ProductEntityActionType.GET_PRODUCTS_SUCCESS:
      return entityAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        hasLoaded: true,
      })
    default:
      return state
  }
}
