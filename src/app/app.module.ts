import { OverlayModule } from '@angular/cdk/overlay'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { CartComponent } from './components/cart/cart.component'
import { HomeComponent } from './components/home/home.component'
import { NavComponent } from './components/nav/nav.component'
import { ProductsComponent } from './components/products/products.component'
import { MaterialModule } from './material.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoaderComponent } from './components/loader/loader.component'

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
    path: 'cart',
    component: CartComponent,
  },
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    OverlayModule,
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductCardComponent,
    LoaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
