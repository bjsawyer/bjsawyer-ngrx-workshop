import { createFeatureSelector, MemoizedSelector } from '@ngrx/store'
import { IAppState } from '../../app.state'
import {
  IProductEntityState,
  PRODUCT_ENTITY_STATE_NAME,
} from './product-entity.state'

const selectProductEntityState: MemoizedSelector<
  IAppState,
  IProductEntityState
> = createFeatureSelector(PRODUCT_ENTITY_STATE_NAME)
