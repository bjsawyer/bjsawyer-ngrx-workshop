import { createFeatureSelector, MemoizedSelector } from '@ngrx/store'
import { IAppState } from '../app.state'
import { IProductState, PRODUCT_STATE_NAME } from './product.state'

const selectProductState: MemoizedSelector<IAppState, IProductState> =
  createFeatureSelector(PRODUCT_STATE_NAME)
