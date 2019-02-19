import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemListState } from '@shopping-cart/shopping-cart-module/model/item-list-state';
import { Item } from '@shopping-cart/shopping-cart-module/model/item';

export const initialState: ItemListState = {
  items: { },
  totalPrice: 0
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  maxId = 0;
  constructor() { }

  private stateSubject: BehaviorSubject<ItemListState> =
      new BehaviorSubject(initialState);

  itemCollection$: Observable<ItemListState> = this.stateSubject.asObservable();

  upsertItem(item: Item) {
    const state: ItemListState = this.stateSubject.value;
    let totalPrice = 0;

    if (!item.id) {
      item.id = ++this.maxId;
      totalPrice = state.totalPrice + item.price * item.qty;
    } else {
      const { [item.id]: updateItem } = state.items;
      totalPrice = state.totalPrice - updateItem.price * updateItem.qty + item.qty * item.price;
    }

    const items = {
      ...state.items,
      [item.id]: item
    };

    this.stateSubject.next({
      ...state,
      items,
      totalPrice
    });
  }

  deleteItem(item: Item) {
    const state: ItemListState = this.stateSubject.value;

    const { [item.id]: removed, ...items } = state.items;

    this.stateSubject.next({
      ...state,
      items,
      totalPrice: state.totalPrice - item.price * item.qty
    });
  }
}
