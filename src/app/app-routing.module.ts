import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartItemsComponent } from './carts/components/cart-items/cart-items.component';

const routes: Routes = [
  {path:"products",component:ProductsListComponent},
  {path:"details/:id", component:ProductDetailsComponent},
  {path:"cart",component:CartItemsComponent},
   {path:"**", redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
