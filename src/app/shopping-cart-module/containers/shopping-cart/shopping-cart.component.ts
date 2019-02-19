import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartService } from '@shopping-cart/shopping-cart-module/core/shopping-cart.service';
import { Item } from '@shopping-cart/shopping-cart-module/model/item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {
  item: Item;
  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  setItem(item: Item) {
    this.item = item;
  }
}
