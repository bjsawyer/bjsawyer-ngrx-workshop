import { createFeatureSelector, MemoizedSelector } from '@ngrx/store'
import { IAppState } from '../../app.state'
import { IProductUiState, PRODUCT_UI_STATE_NAME } from './product-ui.state'

const selectProductUiState: MemoizedSelector<IAppState, IProductUiState> = createFeatureSelector(PRODUCT_UI_STATE_NAME)
