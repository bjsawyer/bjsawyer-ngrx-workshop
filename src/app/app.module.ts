import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppComponent } from './app.component'
import { CartComponent } from './components/cart/cart.component'
import { HomeComponent } from './components/home/home.component'
import { LoaderComponent } from './components/loader/loader.component'
import { NavComponent } from './components/nav/nav.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { ProductsComponent } from './components/products/products.component'
import { MaterialModule } from './material.module'
import { EntityStateModule } from './state/entity/entity-state.module'
import { UiStateModule } from './state/ui/ui-state.module'

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    UiStateModule,
    EntityStateModule,
  ],
  declarations: [
    AppComponent,
    LoaderComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductCardComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
