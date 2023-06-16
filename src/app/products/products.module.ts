import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class ProductsModule { }
