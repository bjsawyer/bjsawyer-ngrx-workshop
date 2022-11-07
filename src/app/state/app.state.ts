import {
  IProductEntityState,
  PRODUCT_ENTITY_STATE_NAME,
} from './entity/product-entity/product-entity.state'
import {
  IProductUiState,
  PRODUCT_UI_STATE_NAME,
} from './ui/product-ui/product-ui.state'

export interface IAppState {
  [PRODUCT_UI_STATE_NAME]?: IProductUiState
  [PRODUCT_ENTITY_STATE_NAME]?: IProductEntityState
}
