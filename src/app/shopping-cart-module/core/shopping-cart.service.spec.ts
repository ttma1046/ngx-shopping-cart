import { TestBed, inject } from '@angular/core/testing';

import { Item } from '@shopping-cart/shopping-cart-module/model/item';

import {
  ShoppingCartService,
  initialState
} from '@shopping-cart/shopping-cart-module/core/shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService]
    });
  });

  it('should be created', inject(
    [ShoppingCartService],
    (service: ShoppingCartService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('#get itemCollection$ should return value from observable', (done: DoneFn) => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    service.itemCollection$.subscribe(value => {
      expect(value).toBe(initialState);
      done();
    });
  });

  it('#addItem should add a Item to the state and ItemCollection return value from state', (done: DoneFn) => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);

    const fakeItem: Item = { name: 'test', price: 3, qty: 4 };
    service.upsertItem(fakeItem);

    const state = {
      ...initialState,
      items: { ...initialState.items, [fakeItem.id]: fakeItem },
      totalPrice: initialState.totalPrice + fakeItem.price * fakeItem.qty
    };

    service.itemCollection$.subscribe(value => {
      expect(value).toEqual(state);
      done();
    });
  });
});
