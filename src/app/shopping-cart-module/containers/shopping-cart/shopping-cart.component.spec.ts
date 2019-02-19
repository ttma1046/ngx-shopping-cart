import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ShoppingCartComponent } from './shopping-cart.component';
import { MaterialModule } from '@shopping-cart/material';
import { ItemFormComponent } from '@shopping-cart/shopping-cart-module/components/item-form/item-form.component';
import { ItemListComponent } from '@shopping-cart/shopping-cart-module/components/item-list/item-list.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShoppingCartComponent,
        ItemFormComponent,
        ItemListComponent
      ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
