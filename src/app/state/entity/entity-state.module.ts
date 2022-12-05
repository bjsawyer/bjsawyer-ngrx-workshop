import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ProductEntityEffects } from './product-entity/product-entity.effects'
import { productEntityReducer } from './product-entity/product-entity.reducer'
import { PRODUCT_ENTITY_STATE_NAME } from './product-entity/product-entity.state'

@NgModule({
  imports: [
    // TODO: Wire up product entity state module
    StoreModule.forFeature(PRODUCT_ENTITY_STATE_NAME, productEntityReducer),
    EffectsModule.forFeature([ProductEntityEffects]),
  ],
})
export class EntityStateModule {}
