import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ProductUiEffects } from './product-ui/product-ui.effects'
import { productUiReducer } from './product-ui/product-ui.reducer'
import { PRODUCT_UI_STATE_NAME } from './product-ui/product-ui.state'

@NgModule({
  imports: [
    // TODO: Wire up product UI state module
    StoreModule.forFeature(PRODUCT_UI_STATE_NAME, productUiReducer),
    EffectsModule.forFeature([ProductUiEffects]),
  ],
})
export class UiStateModule {}
