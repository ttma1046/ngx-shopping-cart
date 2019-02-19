import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Item } from '@shopping-cart/shopping-cart-module/model/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnChanges {
  tableDataSource: MatTableDataSource<Item>;
  displayedColumns: string[] = ['id', 'name', 'qty', 'price', 'Edit', 'Delete'];

  @Input()
  set dataSource(items: { [id: number]: Item }) {
    this.tableDataSource = new MatTableDataSource(Object.values(items));
  }

  @Input() totalPrice: number;
  @Output() editItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter<Item>();

  @ViewChild(MatSort) sort: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    this.tableDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
