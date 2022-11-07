import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { IProductEntity } from './product-entity.interface'

export const PRODUCT_ENTITY_STATE_NAME = 'product-entity'

export const entityAdapter: EntityAdapter<IProductEntity> = createEntityAdapter<IProductEntity>()

export interface IProductEntityState extends EntityState<IProductEntity> {
  isLoading: boolean
  hasLoaded: boolean
}

export const PRODUCT_ENTITY_INITIAL_STATE: IProductEntityState = entityAdapter.getInitialState({
  isLoading: false,
  hasLoaded: false,
})
