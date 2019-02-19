import { Item } from '@shopping-cart/shopping-cart-module/model/item';

export interface ItemListState {
    items: { [id: number]: Item };
    totalPrice: number;
}
