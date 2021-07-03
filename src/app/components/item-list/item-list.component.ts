import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  name;
  description;
  imagePath;

  items = [
    new Item('Test 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Item('Test 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(obj: Item){ 
    this.childEvent.emit(obj); 
  }

  createNewRecipe(){
    this.items.push(new Item(this.name, this.description, this.imagePath))
  }

  popRecipe(){
    this.items.splice(this.items.length - 1);
  }
}
