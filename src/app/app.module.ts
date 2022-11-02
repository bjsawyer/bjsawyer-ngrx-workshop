import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "./material.module";
import { ProductsComponent } from "./products/products.component";

const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [AppComponent, HomeComponent, ProductsComponent, CartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
