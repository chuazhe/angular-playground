import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Item } from '../../models/item.model';

@Component({
  selector   : 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls  : ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit, OnChanges {
  @Input() parentData: Item;

  name;
  description;
  ingredients;

  constructor() {}

  ngOnInit(): void {
    this.name        = 'Recipe Name';
    this.description = 'Description';
    this.ingredients = 'Image Path';
  }

  ngOnChanges(): void {
    if (this.parentData != null) {
      this.name        = this.parentData.name;
      this.description = this.parentData.description;
      this.ingredients = this.parentData.imagePath;
    }
  }
}
