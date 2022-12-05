import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { IAppState } from '../../app.state'
import { entityAdapter, IProductEntityState, PRODUCT_ENTITY_STATE_NAME } from './product-entity.state'

const selectProductEntityState: MemoizedSelector<IAppState, IProductEntityState> =
  createFeatureSelector(PRODUCT_ENTITY_STATE_NAME)

export const { selectAll, selectEntities, selectIds, selectTotal } =
  entityAdapter.getSelectors(selectProductEntityState)

export const selectAllProductEntities = selectAll

export const selectIsProductEntitiesLoading = createSelector(selectProductEntityState, (state) => state.isLoading)
