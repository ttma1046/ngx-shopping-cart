import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@shopping-cart/material/material.module';

import { ShoppingCartRoutingModule } from '@shopping-cart/shopping-cart-module/shopping-cart-routing.module';
import { ShoppingCartComponent } from '@shopping-cart/shopping-cart-module/containers/shopping-cart/shopping-cart.component';
import { ItemFormComponent } from '@shopping-cart/shopping-cart-module/components/item-form/item-form.component';
import { ItemListComponent } from '@shopping-cart/shopping-cart-module/components/item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ShoppingCartRoutingModule
  ],
  declarations: [
    ShoppingCartComponent,
    ItemFormComponent,
    ItemListComponent
  ]
})
export class ShoppingCartModule { }
