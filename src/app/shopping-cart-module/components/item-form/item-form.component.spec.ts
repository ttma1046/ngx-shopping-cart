import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ItemFormComponent } from './item-form.component';
import { MaterialModule } from '@shopping-cart/material';
import { Item } from '@shopping-cart/shopping-cart-module/model/item';

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  let fixture: ComponentFixture<ItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFormComponent ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update formGroup qty input box', () => {
    component.itemForm.controls['qty'].setValue(1);

    const input = fixture.nativeElement.querySelector('input#qty');

    expect(input.value).toEqual('1');
  });

  it('should update the value in the price input box', () => {
    component.itemForm.controls['price'].setValue(3.8);

    const input = fixture.nativeElement.querySelector('input#price');

    expect(input.value).toEqual('3.8');
  });

  it('raises the addItem event when submit button clicked', () => {
    const item: Item = { name: 'Test', price: 2, qty: 1 };
    component.itemForm.patchValue(item);
    const fromGroupDirective: FormGroupDirective = new FormGroupDirective([], []);
    component.upsertItem.subscribe(newItem => expect(newItem).toEqual(item));
    component.onFormSubmit();
  });
});
