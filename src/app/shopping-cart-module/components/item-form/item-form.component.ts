import { Component, EventEmitter, Output, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from '@shopping-cart/shopping-cart-module/model/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnChanges {
  exists = false;
  formTitle = 'Add';
  itemForm: FormGroup;

  @Input() item: Item;
  @Output() upsertItem: EventEmitter<Item> = new EventEmitter<Item>();
  @ViewChild('formDirective') ngFormVar;

  constructor(fb: FormBuilder) {
    this.itemForm = fb.group({
      name: ['', [Validators.required]],
      qty: [0, Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.item && this.item.id) {
      this.exists = true;
      this.formTitle = 'Edit';
      this.itemForm.patchValue(this.item);
    } else {
      this.formTitle = 'Add';
    }
  }

  get name() {
    return this.itemForm.get('name');
  }

  get qty() {
    return this.itemForm.get('qty');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get nameErrorMessage() {
    return this.name.hasError('required') ? 'You must select a product' : '';
  }

  get qtyErrorMessage() {
    return this.qty.hasError('required') ? 'You must select a value' : '';
  }

  get priceErrorMessage() {
    return this.qty.hasError('required') ? 'You must type a price' : '';
  }

  onFormSubmit() {
    if (this.itemForm.valid) {
      let newitem = this.prepareitem(this.itemForm.value);

      if (this.exists) {
        newitem = { ...this.item, ...newitem };
      }

      this.upsertItem.emit(newitem);
      this.ngFormVar.resetForm();
      this.itemForm.reset();
      this.exists = false;
      this.formTitle = 'Add';
    }
  }

  private prepareitem(formValue): Item {
    const item: Item = {
        ...formValue
    };

    return item;
  }
}
