import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  public items = [
    { id: '1', name: 'test' },
    { id: '2', name: 'test2' },
  ];

  constructor() {}

  ngOnInit(): void {}

  // addItem(){
  //   this.items.push(5);
  // }
}
