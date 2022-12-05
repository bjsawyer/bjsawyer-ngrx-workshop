import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { selectAllProductEntities } from '../../entity/product-entity/product-entity.selectors'
import { IAppState } from '../../app.state'
import { IProductUiState, PRODUCT_UI_STATE_NAME } from './product-ui.state'
import { IProduct } from './product.interface'

const selectProductUiState: MemoizedSelector<IAppState, IProductUiState> = createFeatureSelector(PRODUCT_UI_STATE_NAME)

export const selectProducts = createSelector(selectAllProductEntities, (entities): IProduct[] =>
  entities.map(
    (entity): IProduct => ({
      id: entity.id,
      title: entity.title,
      price: `$${entity.price}`,
      image: entity.image,
    })
  )
)

const selectSelectedProductId = createSelector(selectProductUiState, (state) => state.selectedProductId)
export const selectSelectedProduct = createSelector(
  selectProducts,
  selectSelectedProductId,
  (products, selectedProductId) => products.find((product) => product.id === selectedProductId)
)

const selectCartProductIds = createSelector(selectProductUiState, (state) => state.cartProductIds)
export const selectCartProducts = createSelector(selectProducts, selectCartProductIds, (products, cartProductIds) =>
  cartProductIds.map((id) => products.find((product) => product.id === id))
)

export const selectNumProductsInCart = createSelector(selectCartProductIds, (ids) => ids.length)

export const selectIsProductAlreadyInCart = (id: number) =>
  createSelector(selectCartProductIds, (cartProductIds) => cartProductIds.includes(id))
