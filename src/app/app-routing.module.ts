import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '@shopping-cart/layout/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/shoppingcart', pathMatch: 'full' },
  {
    path: 'shoppingcart',
    loadChildren: './shopping-cart-module/shopping-cart.module#ShoppingCartModule',
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
