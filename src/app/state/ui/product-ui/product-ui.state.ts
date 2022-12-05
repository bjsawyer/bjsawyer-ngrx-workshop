export const PRODUCT_UI_STATE_NAME = 'product-ui'

export interface IProductUiState {
  selectedProductId: number
  cartProductIds: number[]
}

export const PRODUCT_UI_INITIAL_STATE: IProductUiState = {
  selectedProductId: null,
  cartProductIds: [],
}
