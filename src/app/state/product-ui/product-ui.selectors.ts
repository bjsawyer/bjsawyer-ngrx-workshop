import { createFeatureSelector, MemoizedSelector } from '@ngrx/store'
import { IAppState } from '../app.state'
import { IProductUiState, PRODUCT_STATE_NAME } from './product-ui.state'

const selectProductState: MemoizedSelector<IAppState, IProductUiState> =
  createFeatureSelector(PRODUCT_STATE_NAME)
