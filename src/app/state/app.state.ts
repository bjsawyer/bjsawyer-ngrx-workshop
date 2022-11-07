import {
  IProductUiState,
  PRODUCT_UI_STATE_NAME,
} from './product-ui/product-ui.state'

export interface IAppState {
  [PRODUCT_UI_STATE_NAME]: IProductUiState
}
